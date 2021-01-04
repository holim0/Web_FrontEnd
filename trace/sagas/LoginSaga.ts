// 로그인/회원가입에 대한 사가.
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import { loginFail, loginReq, loginSuccess } from "Redux/login";
import { closeModal } from "Redux/ModalPage"; // 왜 안댐..
import { setAccessAndRefreshToken } from "Redux/user";
import {
    resetAlert,
    loginSuccessAlert,
    loginFailAlert,
    openAlert,
} from "Redux/alertHandle";

import axios from "axios";

// 로그인 사가

// 로그인 요청(post)
function LoginPost(userData: { userId: string; password: string }) {
    return axios.post(`/api/v1/members/login`, userData);
}

// 로그인 사가
function* LoginSagaReq({ payload }: any) {
    console.log(payload);
    yield put(resetAlert());
    yield put(openAlert());
    try {
        const res = yield call(LoginPost, payload);
        console.log(res);
        // 토큰 객체
        const Token = {
            accessToken: res.data.data.accessToken,
            refreshToken: res.data.data.refreshToken,
        };
        console.log(Token);
        if (res.data.success === true) {
            yield put(loginSuccess());
            yield put(setAccessAndRefreshToken(Token));
            yield put(loginSuccessAlert());
            console.log("로그인 성공!");
        } else {
        }
    } catch (error) {
        console.log(error);
        yield put(loginFail(error));
        yield put(loginFailAlert());
    }
}

// watch

function* watchLoginSagaReq() {
    yield takeLatest(loginReq, LoginSagaReq);
}

//////////////////////////////////////////////////////////////////////////////////////

export default function* LoginSaga(): Generator {
    yield all([fork(watchLoginSagaReq)]);
}
