import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Header from "components/layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}
// 리덕스로 쓰겠다는 뜻.
export default wrapper.withRedux(withReduxSaga(MyApp));
