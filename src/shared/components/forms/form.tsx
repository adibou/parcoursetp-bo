import { FormProvider, UseFormReturn } from 'react-hook-form';

type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
    form: UseFormReturn<any, any>;
    onSubmit: (data: any) => void | false | Promise<void | false>;
    children: React.ReactNode;
    gap?: number | string;
};

export default function Form({ form, onSubmit, children, gap, ...rest }: FormProps) {

    function displayFormErrors(e: any, formContext: any) {
        if (e.code === 'ERR_NETWORK') {
            formContext.setError('root' as never, { type: 'server', message: 'impossible de joindre le serveur' });
        } else if (e.response?.data?.field) {
            formContext.setError(e.response.data.field as never, { type: 'server', message: e.response.data.error });
        } else {
            formContext.setError('root' as never, { type: 'server', message: 'Erreur lors de la requête' });
        }
    }

    async function innerHandleSubmit(data: any) {
            try {
                const result = await onSubmit(data);
                if (result !== false) {
                    form.reset(data, { keepDirty: false });
                }
            } catch (e: any) {
                displayFormErrors(e, form);
            }
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(innerHandleSubmit)} style={formStyle(gap)} {...rest}>
                {children}
            </form>
        </FormProvider>
    );
}


const formStyle = (gap: number | string = 0) => ({
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: `${gap}px`,
});

