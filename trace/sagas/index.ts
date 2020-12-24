import { all, fork } from "redux-saga/effects";
import reviewSaga from "./reviewSaga";
import SignUpSaga from "./SignUpSaga";

export default function* rootSaga() {
    yield all([fork(reviewSaga), fork(SignUpSaga)]);
}
