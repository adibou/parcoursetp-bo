import { css, Interpolation, Theme } from '@emotion/react';
import { forwardRef } from 'react';
import colors from '../tokens/colors';

type InputNumberProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    css?: Interpolation<Theme>;
    suffix?: string;
    real?: boolean;
};

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumber(props, ref) {
    const { suffix, real, css: cssProp, ...rest } = props;
    const paddingRight = suffix ? `calc(${suffix.length}ch + 24px)` : undefined;

    const input = (
        <input
            ref={ref}
            type="number"
            step={real ? 'any' : 1}
            inputMode={real ? 'decimal' : 'numeric'}
            autoComplete="off"
            css={[inputStyle, suffix && { paddingRight }, cssProp]}
            {...rest}
        />
    );

    if (!suffix) return input;

    return (
        <div css={wrapperStyle}>
            {input}
            <span css={suffixStyle}>{suffix}</span>
        </div>
    );
});

export default InputNumber;


const inputStyle = css({
    borderRadius: '5px',
    border: `solid 1px ${colors.neutral300}`,
    padding: '10px 16px',
    width: '100%',
    minWidth: '40px',
    outline: 'none',
    appearance: 'textfield',
    MozAppearance: 'textfield',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
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

const wrapperStyle = css({
    position: 'relative',
    display: 'block',
    width: '100%',
});

const suffixStyle = css({
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.neutral500,
    fontSize: '14px',
    pointerEvents: 'none',
    userSelect: 'none',
});
