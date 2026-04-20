import colors from '@ui/tokens/colors';
import { css } from '@emotion/react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: keyof typeof BUTTON_SIZES;
    color?: keyof typeof BUTTON_COLORS;
    block?: boolean;
};

const BUTTON_SIZES = {
    small: {
        padding: '4px 8px',
        fontSize: '14px',
    },
    medium: {
        padding: '8px 16px',
        fontSize: '16px',
    },
    large: {
        padding: '12px 24px',
        fontSize: '18px',
    },
};

export const BUTTON_COLORS = {
    neutral: {
        backgroundColor: colors.neutral200,
        color: colors.neutral900,
        hoverColor: colors.neutral300,
        activeColor: colors.neutral400,
    },
    error: {
        backgroundColor: colors.red600,
        color: colors.white,
        hoverColor: colors.red700,
        activeColor: colors.red800,
    },
    secondary: {
        backgroundColor: colors.neutral500,
        color: colors.white,
        hoverColor: colors.neutral700,
        activeColor: colors.neutral900,
    }
};


export default function Button({ size = 'medium', color = 'neutral', block = false, ...rest }: ButtonProps) {
    return <button css={buttonStyle(size, color, block)} {...rest} />;
}


const buttonStyle = (size: keyof typeof BUTTON_SIZES, color: keyof typeof BUTTON_COLORS, block: boolean) => {
    const sizeStyle = BUTTON_SIZES[size];
    const colorStyle = BUTTON_COLORS[color];

    return css({
        ...sizeStyle,
        backgroundColor: colorStyle.backgroundColor,
        color: colorStyle.color,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: block ? 'block' : 'inline-block',
        width: block ? '100%' : 'auto',
        fontWeight: 500,
        transition: 'background-color 120ms ease',
        '&:hover': {
            backgroundColor: colorStyle.hoverColor,
        },
        '&:active': {
            backgroundColor: colorStyle.activeColor,
        },
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
    });
};
