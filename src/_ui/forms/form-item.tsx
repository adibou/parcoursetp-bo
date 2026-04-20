import { css } from '@emotion/react';
import Label from '../inputs/label';
import { useFormContext, useFormState } from 'react-hook-form';
import colors from '../tokens/colors';


type FormItemProps = {
    label?: string,
    help?: string,
    children: React.ReactNode,
    name?: string
};

export default function FormItem({ label, children, help, name }: FormItemProps) {
  const { control } = useFormContext();
  const { errors } = useFormState({ control, name });
  const error = name ? errors?.[name] : undefined;
    return <div css={layoutStyle(!!error)}>
        {label && <Label htmlFor={`rhf-${name}`}>{label}</Label>}
        {help && <div css={helpStyle}>{help}</div>}
        {children}
        {error && <div css={errorStyle}>{error?.message?.toString()}</div>}
    </div>;
}


const layoutStyle = (hasError: boolean) => css({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    ...(hasError && {
        '& input, & input:focus, & select, & select:focus, & textarea, & textarea:focus': {
            borderColor: colors.red600,
        },
    }),
})

const helpStyle = css({
    fontSize: '13px',
    color: colors.neutral500,
});

const errorStyle = css({
    color: colors.red600,
    fontSize: '13px',
});

