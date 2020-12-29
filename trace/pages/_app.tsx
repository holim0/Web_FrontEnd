import wrapper from "../store/configureStore";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Axios from "axios";

Axios.defaults.baseURL = "http://jaggutrace.com/";
// Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}
// 리덕스로 쓰겠다는 뜻.
export default wrapper.withRedux(MyApp);
