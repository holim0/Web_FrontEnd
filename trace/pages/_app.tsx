import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(withReduxSaga(MyApp));
