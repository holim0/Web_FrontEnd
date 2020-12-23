//회원가입에 대한 사가.
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {
    isMemberCheckReq,
    isMemberCheckSuccess,
    isMemberCheckFail,
} from "Redux/SignUp";
import { setNameAndPhone } from "Redux/user";
import axios from "axios";

// 회원가입 사가

// 기존 회원 여부 체크 요청(post)
function memberCheckPost(userData: { name: string; phoneNum: string }) {
    return axios.post("", userData);
}
// 아이디 중복 확인(post)
function idDoublePost(id: string) {
    return axios.post("", id);
}

function* setNameAndPhoneSaga(userData: { name: string; phoneNum: string }) {
    try {
        const res = yield call(memberCheckPost(userData));
        if (res) {
            yield put(isMemberCheckSuccess());
            yield put(setNameAndPhone(userData));
        }
    } catch (error) {
        console.log(error);
        yield put(isMemberCheckFail(error));
    }
}

function* watchsetNameAndPhoneSaga() {
    yield takeLatest(isMemberCheckReq, setNameAndPhoneSaga);
}

//////////////////////////////////////

export default function* SignUpSaga(): Generator {
    yield all([fork(watchsetNameAndPhoneSaga)]);
}
