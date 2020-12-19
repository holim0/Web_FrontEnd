import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(withReduxSaga(MyApp));
