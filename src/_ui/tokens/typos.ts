import { css } from "@emotion/react";

const fontFamily = '"Inter Variable", system-ui, sans-serif';

const typos = {
    h1: css({
        fontFamily,
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 700,
    }),
    h2: css({
        fontFamily,
        fontSize: '26px',
        lineHeight: '34px',
        fontWeight: 700,
    }),
    h3: css({
        fontFamily,
        fontSize: '22px',
        lineHeight: '30px',
        fontWeight: 600,
    }),
    h4: css({
        fontFamily,
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: 600,
    }),

    textSm: css({
        fontFamily,
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
    }),
    textSmBold: css({
        fontFamily,
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 600,
    }),

    textBase: css({
        fontFamily,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400,
    }),
    textBaseBold: css({
        fontFamily,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 600,
    }),

    textLg: css({
        fontFamily,
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 400,
    }),
    textLgBold: css({
        fontFamily,
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 600,
    }),
};

export default typos;
