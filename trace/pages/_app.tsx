import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Header from "components/layouts/Header";
import "styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

// 리덕스로 쓰겠다는 뜻.
export default wrapper.withRedux(withReduxSaga(MyApp));