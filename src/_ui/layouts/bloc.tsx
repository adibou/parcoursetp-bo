import { css } from "@emotion/react";
import colors from "../tokens/colors";


type BlocProps = {
    gap?: number | string;
    color?: keyof typeof BLOC_COLORS;
    children: React.ReactNode;
    p?:number;
}


const BLOC_COLORS = {
    white: colors.white,
}


export default function Bloc({ gap = '0', color = 'white', children, p = 20 }: BlocProps) {
    return <div css={blocStyle(gap, color, p)}>{children}</div>;
}


const blocStyle = (gap: number | string, color: keyof typeof BLOC_COLORS, p: number) => css({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: `${gap}px`,
    backgroundColor: BLOC_COLORS[color],
    borderRadius: '8px',
    padding: `${p}px`,

});