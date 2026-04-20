import colors from '@ui/tokens/colors';
import { css } from '@emotion/react';

type LinkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: keyof typeof BUTTON_SIZES;
    color?: keyof typeof BUTTON_COLORS;
    block?: boolean;
};

const BUTTON_SIZES = {
    small: {fontSize: '14px'},
    medium: {fontSize: '16px'},
    large: {fontSize: '18px'}
};

const BUTTON_COLORS = {
    neutral: {
        color: colors.neutral900,
        hoverColor: colors.neutral700,
        activeColor: colors.neutral600,
    },
    error: {
        color: colors.red600,
        hoverColor: colors.red700,
        activeColor: colors.red800,
    },
    secondary: {
        color: colors.neutral500,
        hoverColor: colors.neutral700,
        activeColor: colors.neutral900,
    }
};


export default function LinkButton({ size = 'medium', color = 'neutral', block = false, ...rest }: LinkButtonProps) {
    return <button css={buttonStyle(size, color, block)} {...rest} />;
}


const buttonStyle = (size: keyof typeof BUTTON_SIZES, color: keyof typeof BUTTON_COLORS, block: boolean) => {
    const sizeStyle = BUTTON_SIZES[size];
    const colorStyle = BUTTON_COLORS[color];

    return css({
        ...sizeStyle,
        backgroundColor: 'transparent',
        color: colorStyle.color,
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: block ? 'block' : 'inline-block',
        width: block ? '100%' : 'auto',
        textAlign: block ? 'center' : 'left',
        fontWeight: 500,
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        transition: 'color 120ms ease',
        '&:hover': {
            color: colorStyle.hoverColor,
        },
        '&:active': {
            color: colorStyle.activeColor,
        },
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
    });
};
