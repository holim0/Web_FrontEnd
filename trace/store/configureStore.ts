import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../redux";
import rootSaga from "../sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware(); // 미들웨어 생성
    const logger = createLogger(); // 로거 생성
    const middlewares = [sagaMiddleware, logger];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(sagaMiddleware))
            : compose(composeWithDevTools(applyMiddleware(...middlewares)));
    const store = createStore(rootReducer, enhancer); // 스토어 생성
    store.sagaTask = sagaMiddleware.run(rootSaga); // 미들웨어 실행 그리고 sagaTask에 할당.
    return store;
};

//next redux wrapper => 넥스트에서 리덕스를 쓰겠다는 내용
const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
