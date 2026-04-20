import { Interpolation, Theme } from '@emotion/react';

const INLINE_JUSTIFY = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
}

const INLINE_ALIGN = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
}


type InlineProps = {
    justify?: keyof typeof INLINE_JUSTIFY;
    align?: keyof typeof INLINE_ALIGN;
    gap?: number | string;
    css?: Interpolation<Theme>;
    children: React.ReactNode;
}

export default function Inline({ justify = 'start', align = 'center', gap = '0', css: cssProp, children }: InlineProps) {
    return <div css={[inlineStyle(justify, align, gap), cssProp]}>{children}</div>;
}

const inlineStyle = (justify: keyof typeof INLINE_JUSTIFY, align: keyof typeof INLINE_ALIGN, gap: number | string) => ({
    display: 'flex',
    justifyContent: INLINE_JUSTIFY[justify],
    alignItems: INLINE_ALIGN[align],
    gap: `${gap}px`,
});
