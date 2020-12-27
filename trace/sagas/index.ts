import { all, fork } from "redux-saga/effects";
import reviewSaga from "./reviewSaga";
import SignUpSaga from "./SignUpSaga";
import LoignSaga from "./LoginSaga";
import LoginSaga from "./LoginSaga";

export default function* rootSaga() {
    yield all([fork(reviewSaga), fork(SignUpSaga), fork(LoginSaga)]);
}
