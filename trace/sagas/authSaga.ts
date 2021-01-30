//새로고침시 accessToken 다시 가져오기
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import { setAccessToken } from "Redux/user";
import { loginSuccess } from "Redux/login";
import {
    getAuthbyTokenReq,
    getAuthbyTokenReqSuccess,
    getAuthbyTokenReqFail,
} from "Redux/getAuth";

function getAuthbyToken() {
    return axios.get("/api/v1/auth/token", {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "http://jaggutrace.com" },
    });
}

function* AuthSagaReq() {
    try {
        const res = yield call(getAuthbyToken);
        console.log(res);
        if (res.data.success) {
            const Token = res.data.data.accessToken;
            console.log(Token);
            yield put(setAccessToken(Token));
            yield put(loginSuccess());
            yield put(getAuthbyTokenReqSuccess());
            axios.defaults.headers.common["Authorization"] = `Bearer ${Token}`;
        } else {
            alert("오류 발생!");
        }
    } catch (error) {
        yield put(getAuthbyTokenReqFail(error));
        console.log(error);
    }
}

function* watchAuthSaga() {
    yield takeLatest(getAuthbyTokenReq, AuthSagaReq);
}

export default function* LoginSaga(): Generator {
    yield all([fork(watchAuthSaga)]);
}
