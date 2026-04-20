import '@fontsource-variable/inter/index.css';
import globalStyle from "@/_ui/styles/global-styles";
import resetStyles from "@/_ui/styles/reset-styles";
import { Global } from "@emotion/react";
import AppRouter from "../navigation/app-router";
import { HashRouter } from "react-router-dom";

export default function App() {
    return <>
        <Global styles={[resetStyles, globalStyle]} />
        <HashRouter>
            <AppRouter />
        </HashRouter>
    </>;
}
