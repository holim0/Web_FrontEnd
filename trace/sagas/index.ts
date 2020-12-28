import { all, fork } from "redux-saga/effects";
import reviewSaga from "./reviewSaga";
import SignUpSaga from "./SignUpSaga";
import LoginSaga from "./LoginSaga";
import Axios from "axios";

// Axios.defaults.baseURL = "http://jaggutrace.com/";

export default function* rootSaga() {
    yield all([fork(reviewSaga), fork(SignUpSaga), fork(LoginSaga)]);
}
