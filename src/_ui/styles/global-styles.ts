import { css } from "@emotion/react";

const globalStyle = css`

    html, body, #root { height: 100%; }

    #root {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    html, input, button, select, textarea {
        font-family: "Inter Variable", system-ui, sans-serif;
        font-size: 14px;
        font-weight: 400;
    }

`;

export default globalStyle;