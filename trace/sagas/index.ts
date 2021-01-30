import { all, fork } from "redux-saga/effects";
import reviewSaga from "./reviewSaga";
import SignUpSaga from "./SignUpSaga";
import LoginSaga from "./LoginSaga";
import authSaga from "./authSaga";
import buildingSaga from "./buildingSaga";
import searchSaga from "./searchSaga";

export default function* rootSaga() {
    yield all([
        fork(reviewSaga),
        fork(SignUpSaga),
        fork(LoginSaga),
        fork(authSaga),
        fork(buildingSaga),
        fork(searchSaga),
    ]);
}
