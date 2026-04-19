import colors from '@/shared/colors';
import { css } from '@emotion/react';
import { FieldErrorsImpl } from 'react-hook-form';

export function FormErrors({ form }: { form:any }) {
    return <>
        {(form.formState.errors as Partial<FieldErrorsImpl<any>>)?.root?.message && <div css={errorStyle}>{(form.formState.errors as Partial<FieldErrorsImpl<any>>)?.root?.message?.toString()}</div>}
    </>;
}

const errorStyle = css({
    color: colors.red600,
});