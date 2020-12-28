import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Store } from "node_modules/redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Redux";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware(); // 미들웨어 생성
const logger = createLogger(); // 로거 생성
const middlewares = [sagaMiddleware, logger];

const store = () =>
    configureStore({
        reducer: rootReducer,
        middleware: () =>
            getDefaultMiddleware({ serializableCheck: false }).concat(
                middlewares
            ),
        devTools: process.env.NODE_ENV !== "production",
    });
(store() as Store).sagaTask = sagaMiddleware.run(rootSaga); // 미들웨어 실행 그리고 sagaTask에 할당.

//next redux wrapper => 넥스트에서 리덕스를 쓰겠다는 내용
const wrapper = createWrapper(store, { debug: true });

export default wrapper;
