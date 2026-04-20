import { css, Interpolation, Theme } from '@emotion/react';
import colors from '../tokens/colors';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
};

export default function Input(props: InputProps) {
    const { css: cssProp, ...rest } = props;
    return <input css={[inputStyle, cssProp]} autoComplete="off" {...rest} />;
}


const inputStyle = css({
    borderRadius: '5px',
    border: `solid 1px ${colors.neutral300}`,
    padding: '10px 16px',
    width: '100%',
    minWidth: '40px',
    outline: 'none',
    '&:focus': {
        borderColor: colors.neutral500,
    },
    '&[aria-invalid="true"]': {
        borderColor: colors.red600,
    },
    '&[aria-invalid="true"]:focus': {
        borderColor: colors.red600,
    },
});
