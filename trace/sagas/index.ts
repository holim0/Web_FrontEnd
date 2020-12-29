import { all, fork } from "redux-saga/effects";
import reviewSaga from "./reviewSaga";
import SignUpSaga from "./SignUpSaga";
import LoginSaga from "./LoginSaga";
import Axios from "axios";

export default function* rootSaga() {
    yield all([fork(reviewSaga), fork(SignUpSaga), fork(LoginSaga)]);
}
