import colors from '@ui/tokens/colors';
import typos from '@ui/tokens/typos';

const HEADING_COLORS = {
    primary: colors.neutral900,
    secondary: colors.neutral600,
    error: colors.red600,
}

const HEADING_TYPO = {
    h1: typos.h1,
    h2: typos.h2,
    h3: typos.h3,
    h4: typos.h4,
}


type HeadingProps = React.HTMLProps<HTMLHeadingElement> & {
    children: React.ReactNode;
    color?: keyof typeof HEADING_COLORS;
    typo?: keyof typeof HEADING_TYPO;
}

export default function Heading({ children, color = 'primary', typo = 'h1', ...rest }: HeadingProps) {

    const css = [HEADING_TYPO[typo], { color: HEADING_COLORS[color] }];

    return (
        <div css={css} {...rest}>
            {children}
        </div>
    );
}
