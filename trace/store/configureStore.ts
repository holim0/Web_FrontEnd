import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../redux";
import rootSaga from "../sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger();
    const middlewares = [sagaMiddleware, logger];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(sagaMiddleware))
            : compose(composeWithDevTools(applyMiddleware(...middlewares)));
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
