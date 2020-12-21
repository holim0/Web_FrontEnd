import { all, fork } from "redux-saga/effects";
import reviewSaga from "./reviewSaga";

export default function* rootSaga() {
    yield all([fork(reviewSaga)]);
}
