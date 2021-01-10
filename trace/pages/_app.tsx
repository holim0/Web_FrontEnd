import { wrapper } from "store/configureStore";
import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Axios from "axios";
import { RootState } from "redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// api 베이스 도메인 url
Axios.defaults.baseURL = "http://jaggutrace.com/";
// Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
    const token = useSelector((state: RootState) => state.user.accessToken);

    useEffect(() => {
        Axios.defaults.headers.Authorization = "";
        if (token) {
            Axios.defaults.headers.Authorization = `Bearer ${token}`;
        }
    }, [token]);

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
