

const STACK_JUSTIFY = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
}



type StackProps = {
    id?: string;
    justify?: keyof typeof STACK_JUSTIFY;
    gap?: number | string;
    children?: React.ReactNode;
    maxWidth?: number | string;
}

export default function Stack({ id, justify = 'start', gap = '0', children, maxWidth }: StackProps) {
    return <div id={id} css={stackStyle(justify, gap, maxWidth)}>{children}</div>;
}

const stackStyle = (justify: keyof typeof STACK_JUSTIFY, gap: number | string, maxWidth?: number | string) => ({
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: STACK_JUSTIFY[justify],
    gap: `${gap}px`,
    maxWidth: maxWidth !== undefined ? (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth) : undefined,
});
