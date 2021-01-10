import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import {
    getAuthbyTokenReq,
    getAuthbyTokenReqSuccess,
    getAuthbyTokenReqFail,
} from "Redux/getAuth";

function getAuthbyToken() {
    return axios.get("/api/v1/auth/token", {
        withCredentials: true,
        // headers: { "Access-Control-Allow-Origin": "http://jaggutrace.com" },
    });
}

function* AuthSagaReq() {
    try {
        const res = yield call(getAuthbyToken);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

function* watchAuthSaga() {
    yield takeLatest(getAuthbyTokenReq, AuthSagaReq);
}

export default function* LoginSaga(): Generator {
    yield all([fork(watchAuthSaga)]);
}
