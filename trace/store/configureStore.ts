import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { Store } from "node_modules/redux";
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

const sagaMiddleware = createSagaMiddleware(); // 미들웨어 생성
const logger = createLogger(); // 로거 생성
// const middlewares = [sagaMiddleware, logger];

// const store = () =>
//     configureStore({
//         reducer: rootReducer,
//         middleware: () =>
//             getDefaultMiddleware({ serializableCheck: false }).concat(
//                 middlewares
//             ),
//         devTools: process.env.NODE_ENV !== "production",
//     });
// (store() as Store).sagaTask = sagaMiddleware.run(rootSaga); // 미들웨어 실행 그리고 sagaTask에 할당.

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

// export default wrapper;
