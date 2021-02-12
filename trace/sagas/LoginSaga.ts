// 로그인/회원가입에 대한 사가.
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {
    loginFail,
    loginReq,
    loginSuccess,
    logoutReq,
    logoutSuccess,
    logoutFail,
} from "Redux/login";
import { setAccessToken } from "Redux/user";
import {
    resetAlert,
    loginSuccessAlert,
    loginFailAlert,
    openAlert,
    logOutSucessAlert,
    logOutFailAlert,
} from "Redux/alertHandle";

import axios from "axios";

// 로그인 사가

// 로그인 요청(post)
function LoginPost(userData: { userId: string; password: string }) {
    return axios.post(`/api/v1/members/login`, userData, {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "http://jaggutrace.com" },
    });
}

// 로그아웃 요청(get)
function LogOutGet() {
    return axios.get("/api/v1/members/logout");
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
        const accessToken = res.data.data.accessToken;

        // //헤더에 엑세스 토큰 부여.
        // axios.defaults.headers.common[
        //     "Authorization"
        // ] = `Bearer ${accessToken}`;

        // 로그인 성공시
        if (res.data.success === true) {
            yield put(loginSuccess());
            yield put(setAccessToken(accessToken));
            yield put(loginSuccessAlert());
            console.log("로그인 성공!");
        } else {
            alert("로그인 실패");
        }
    } catch (error) {
        console.log(error);
        yield put(loginFail(error));
        yield put(loginFailAlert());
    }
}

//로그아웃 사가

function* logOutSaga({ payload }: any) {
    yield put(resetAlert());
    yield put(openAlert());
    try {
        const res = yield call(LogOutGet);

        if (res.data.success) {
            yield put(logoutSuccess());
            yield put(logOutSucessAlert());
        } else {
            yield put(loginFailAlert());
        }
    } catch (error) {
        console.log(error);
        yield put(logoutFail(error));
        yield put(loginFailAlert());
    }
}

// watch login

function* watchLoginSagaReq() {
    yield takeLatest(loginReq, LoginSagaReq);
}

// wath logout

function* watchLogOutSagaReq() {
    yield takeLatest(logoutReq, logOutSaga);
}

//////////////////////////////////////////////////////////////////////////////////////

export default function* LoginSaga(): Generator {
    yield all([fork(watchLoginSagaReq), fork(watchLogOutSagaReq)]);
}
