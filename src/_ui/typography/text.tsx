import colors from '@ui/tokens/colors';
import typos from '@ui/tokens/typos';

const TEXT_COLORS = {
    primary : colors.neutral900,
    secondary : colors.neutral600,
    error : colors.red600,
}

const TEXT_TYPO = {
    base: typos.textBase,
    bold : typos.textBaseBold,
    sm : typos.textSm,
    smBold : typos.textSmBold,
    lg : typos.textLg,
    lgBold : typos.textLgBold,
}

type TextProps = React.HTMLProps<HTMLSpanElement> &{
    children: React.ReactNode;
    typo?: keyof typeof TEXT_TYPO;
    color?: keyof typeof TEXT_COLORS;
}

export default function Text({ children, typo = 'base', color = 'primary', ...rest }: TextProps) {
    
    const css = [TEXT_TYPO[typo], { color: TEXT_COLORS[color] }];
    
    return (
        <span css={css} {...rest}>
            {children}
        </span>
    );
}