import colors from '@ui/tokens/colors';
import { css } from '@emotion/react';

type OutlinedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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

const BUTTON_COLORS = {
    neutral: {
        borderColor: colors.neutral300,
        color: colors.neutral900,
        hoverBgColor: colors.neutral100,
        activeBgColor: colors.neutral200,
    },
    error: {
        borderColor: colors.red600,
        color: colors.red600,
        hoverBgColor: colors.red100,
        activeBgColor: colors.red300,
    },
    secondary: {
        borderColor: colors.neutral500,
        color: colors.neutral500,
        hoverBgColor: colors.neutral100,
        activeBgColor: colors.neutral200,
    }
};


export default function OutlinedButton({ size = 'medium', color = 'neutral', block = false, ...rest }: OutlinedButtonProps) {
    return <button css={buttonStyle(size, color, block)} {...rest} />;
}


const buttonStyle = (size: keyof typeof BUTTON_SIZES, color: keyof typeof BUTTON_COLORS, block: boolean) => {
    const sizeStyle = BUTTON_SIZES[size];
    const colorStyle = BUTTON_COLORS[color];

    return css({
        ...sizeStyle,
        backgroundColor: 'transparent',
        color: colorStyle.color,
        border: `solid 1px ${colorStyle.borderColor}`,
        borderRadius: '5px',
        cursor: 'pointer',
        display: block ? 'block' : 'inline-block',
        width: block ? '100%' : 'auto',
        fontWeight: 500,
        transition: 'background-color 120ms ease',
        '&:hover': {
            backgroundColor: colorStyle.hoverBgColor,
        },
        '&:active': {
            backgroundColor: colorStyle.activeBgColor,
        },
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
    });
};
