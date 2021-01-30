import { wrapper } from "store/configureStore";
import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Axios from "axios";
import { RootState } from "Redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuthbyTokenReq } from "Redux/getAuth";

// api 베이스 도메인 url
Axios.defaults.baseURL = "http://api.jaggutrace.com/";

//토큰을 주고 받기 위해.
// Axios.defaults.withCredentials = true;
// Axios.defaults.headers.post["Access-Control-Allow-Origin"] =
//     "http://jaggutrace.com";

function MyApp({ Component, pageProps }: AppProps) {
    const token = useSelector((state: RootState) => state.user.accessToken);

    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            dispatch(getAuthbyTokenReq());
        }
    }, [dispatch, token]);

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
