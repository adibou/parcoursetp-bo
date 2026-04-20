import { css } from '@emotion/react';
import { highlight } from 'sugar-high';
import colors from '../tokens/colors';

type CodeBlockProps = {
    code: string;
};

export default function CodeBlock({ code }: CodeBlockProps) {
    const trimmed = code.replace(/^\n+|\n+$/g, '');
    return (
        <pre css={preStyle}>
            <code dangerouslySetInnerHTML={{ __html: highlight(trimmed) }} />
        </pre>
    );
}


const preStyle = css({
    margin: 0,
    padding: '16px 20px',
    backgroundColor: colors.neutral100,
    color: colors.neutral900,
    borderRadius: '8px',
    fontFamily: '"SF Mono", Menlo, Consolas, monospace',
    fontSize: '13px',
    lineHeight: 1.6,
    overflowX: 'auto',
    '--sh-identifier': colors.neutral800,
    '--sh-keyword': '#c026d3',
    '--sh-string': '#15803d',
    '--sh-class': '#b45309',
    '--sh-property': '#1d4ed8',
    '--sh-entity': '#6d28d9',
    '--sh-jsxliterals': '#1d4ed8',
    '--sh-sign': colors.neutral500,
    '--sh-comment': colors.neutral500,
});
