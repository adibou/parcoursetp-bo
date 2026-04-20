import { css } from "@emotion/react";
import colors from "../tokens/colors";

const TAG_COLORS = {
    neutral : { background: colors.neutral200, color: colors.neutral900 },
}

type TagProps = React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode;
    color?: keyof typeof TAG_COLORS;
}


export default function Tag({ children, color = 'neutral', ...rest }: TagProps) {
    return <span css={tagStyle(color)} {...rest}>{children}</span>
}

const tagStyle = (color: keyof typeof TAG_COLORS) => css({
    background: TAG_COLORS[color].background,
    color: TAG_COLORS[color].color,
    borderRadius: '8px',
    padding: '3px 12px',
    display: 'inline-block',
    fontSize: '12px',
})