import { css } from '@emotion/react';

const resetStyles = css({
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },
    '*': {
        margin: 0,
        padding: 0,
    },
    'html, body': {
        height: '100%',
    },
    body: {
        lineHeight: 1.5,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
    },
    'img, picture, video, canvas, svg': {
        display: 'block',
        maxWidth: '100%',
    },
    'input, button, textarea, select': {
        font: 'inherit',
        color: 'inherit',
    },
    button: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    'p, h1, h2, h3, h4, h5, h6': {
        overflowWrap: 'break-word',
    },
    'ol, ul': {
        listStyle: 'none',
    },
    a: {
        color: 'inherit',
        textDecoration: 'none',
    },
    'table': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
    },
    '#root, #__next': {
        isolation: 'isolate',
    },
});

export default resetStyles;
