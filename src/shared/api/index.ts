import { getAccessToken, setAccessToken } from './token-manager';
import { env } from '@/env';

export type FetchStatus = 'loading' | 'succeed' | 'error';

type AuthUserManager = {
    signinSilent: () => Promise<{ access_token: string } | null>;
};

let authUserManager: AuthUserManager | null = null;
let isRefreshing = false;
let failedQueue: Array<{ resolve: () => void; reject: (err: unknown) => void }> = [];

export function setAuthUserManager(userManager: AuthUserManager): void {
    authUserManager = userManager;
}

function processQueue(error: unknown): void {
    failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve()));
    failedQueue = [];
}

async function refreshAndRetry(request: () => Promise<Response>): Promise<Response> {
    if (isRefreshing) {
        return new Promise<Response>((resolve, reject) => {
        failedQueue.push({
            resolve: () => resolve(request()),
            reject,
        });
        });
    }

    isRefreshing = true;

    try {
        if (authUserManager) {
        const user = await authUserManager.signinSilent();
        if (user?.access_token) {
            setAccessToken(user.access_token);
            processQueue(null);
            return await request();
        }
        }
        processQueue(new Error('Silent refresh failed'));
        throw new Error('Silent refresh failed');
    } catch (err) {
        processQueue(err);
        throw err;
    } finally {
        isRefreshing = false;
    }
}

async function fetchWithAuth(path: string, init: RequestInit = {}): Promise<Response> {
    const url = `${env.API_URL}${path}`;
    const token = getAccessToken();

    const headers = new Headers(init.headers);
    if (token) headers.set('Authorization', `Bearer ${token}`);
    headers.set('x-client-app', 'admin');
    headers.set('Content-Type', 'application/json');

    const makeRequest = () =>
        fetch(url, { credentials: 'include', ...init, headers });

    const response = await makeRequest();

    if (
        response.status === 401 &&
        !path.includes('/auth/login') &&
        !path.includes('/auth/me')
    ) {
        return refreshAndRetry(makeRequest);
    }

    return response;
}

async function parseResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const text = await response.text();
    return text ? (JSON.parse(text) as T) : (undefined as T);
}

export async function get<T>(path: string, params: Record<string, string> = {}): Promise<T> {
    const query = new URLSearchParams(params).toString();
    const response = await fetchWithAuth(query ? `${path}?${query}` : path);
    return parseResponse<T>(response);
}

export async function post<T>(path: string, data: unknown = {}): Promise<T> {
    const response = await fetchWithAuth(path, { method: 'POST', body: JSON.stringify(data) });
    return parseResponse<T>(response);
}

export async function put<T>(path: string, data: unknown = {}): Promise<T> {
    const response = await fetchWithAuth(path, { method: 'PUT', body: JSON.stringify(data) });
    return parseResponse<T>(response);
}

export async function del<T>(path: string): Promise<T> {
    const response = await fetchWithAuth(path, { method: 'DELETE' });
    return parseResponse<T>(response);
}
