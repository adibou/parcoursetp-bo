import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import colors from '../tokens/colors';
import Icon from '../elements/icon';

type SearchInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    onDebouncedChange?: (value: string) => void;
    debounceMs?: number;
};

export default function SearchInput(props: SearchInputProps) {
    const { onChange, onDebouncedChange, debounceMs = 200, defaultValue, value, ...rest } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isControlled = value !== undefined;
    const [hasValue, setHasValue] = useState(Boolean(isControlled ? value : defaultValue));

    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const nextValue = e.target.value;
        setHasValue(nextValue.length > 0);
        onChange?.(e);

        if (onDebouncedChange) {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                onDebouncedChange(nextValue);
            }, debounceMs);
        }
    }

    function handleClear() {
        const input = inputRef.current;
        if (!input) return;
        const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        nativeSetter?.call(input, '');
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.focus();
        setHasValue(false);

        if (timerRef.current) clearTimeout(timerRef.current);
        onDebouncedChange?.('');
    }

    const showClear = isControlled ? Boolean(value) : hasValue;

    return (
        <div css={wrapperStyle}>
            <span css={prefixStyle}>
                <Icon name="search" size={18} color="neutral500" />
            </span>
            <input
                ref={inputRef}
                css={inputStyle}
                type="search"
                autoComplete="off"
                onChange={handleChange}
                value={value}
                defaultValue={defaultValue}
                {...rest}
            />
            {showClear && (
                <button type="button" css={clearStyle} onClick={handleClear} aria-label="Effacer">
                    <Icon name="close" size={18} color="neutral500" />
                </button>
            )}
        </div>
    );
}


const wrapperStyle = css({
    position: 'relative',
    width: '100%',
});

const inputStyle = css({
    borderRadius: '5px',
    border: `solid 1px ${colors.neutral300}`,
    padding: '10px 40px',
    width: '100%',
    minWidth: '40px',
    outline: 'none',
    '&:focus': {
        borderColor: colors.neutral500,
    },
    '&::-webkit-search-cancel-button': {
        display: 'none',
    },
});

const prefixStyle = css({
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    pointerEvents: 'none',
});

const clearStyle = css({
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    padding: '4px',
    background: 'none',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: colors.neutral100,
    },
});
