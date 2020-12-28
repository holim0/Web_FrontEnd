// 로그인/회원가입에 대한 사가.
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import { loginFail, loginReq, loginSuccess } from "Redux/login";

import axios from "axios";

// 로그인 사가

const Domain: String = "http://jjaggutrace.com";

// 로그인 요청(post)

function LoginPost(userData: { userId: string; password: string }) {
    return axios.post(`${Domain}/api/v1/members/login`, userData);
}

// 로그인 사가

function* LoginSagaReq({ payload }: any) {
    console.log("hi");
    try {
        const res = yield call(LoginPost, payload);
        console.log(res);
        if (res.success === "true") {
            yield put(loginSuccess());
        } else {
        }
    } catch (error) {
        console.log(error);
        yield put(loginFail(error));
    }
}

// watch

function* watchLoginSagaReq() {
    yield takeLatest(loginReq, LoginSagaReq);
}

//////////////////////////////////////

export default function* LoginSaga(): Generator {
    yield all([fork(watchLoginSagaReq)]);
}
