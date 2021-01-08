import { createWrapper, MakeStore } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Redux";
import rootSaga from "../sagas";
import {
    applyMiddleware,
    createStore,
    Middleware,
    StoreEnhancer,
} from "node_modules/redux";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore: MakeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware, logger])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

//next redux wrapper => 넥스트에서 리덕스를 쓰겠다는 내용
export const wrapper = createWrapper(makeStore, { debug: true });
