//회원가입에 대한 사가.
import { all, fork, takeLatest, put, call, take } from "redux-saga/effects";
import {
    isMemberCheckReq,
    isMemberYes,
    isMemberNo,
    isMemberCheckFail,
    idDoubleCheckReq,
    idDoubleYes,
    idDoubleNo,
    idDoubleCheckFail,
    emailVerifyReq,
    emailVerifySuccess,
    emailVerifyFail,
    signUpReq,
} from "Redux/SignUp";
import {
    preferenceWrite,
    setNameAndPhone,
    setIdState,
    setPassWordState,
    setEmail,
    user,
} from "Redux/user";
import {
    resetAlert,
    isMemberAlert,
    notMemberAlert,
    openAlert,
    idDoubleAlert,
    idNotDoubleAlert,
    emailSendAlert,
    isSignUpSuccessAlert,
    isSignUpFailAlert,
} from "Redux/alertHandle";
import { closeModal } from "Redux/ModalPage";

import axios from "axios";

// 기존 회원 여부 체크 요청(get)
function memberCheckGet(userData: { name: string; phoneNum: string }) {
    return axios.get(
        `/api/v1/auth/registered?name=${userData.name}&phoneNum=${userData.phoneNum}`
    );
}
// 아이디 중복 확인(get)
function idDoubleGet(id: string) {
    return axios.get(`/api/v1/auth/registered?userId=${id}`);
}

// 이메일 인증(get)
function emailVerify(email: string) {
    return axios.get(`/api/v1/mail/verification?mail=${email}`);
}

// 회원가입

function SignUpPost(userInfo: any) {
    // 일단 any 로 했습니다... 수정 예정
    return axios.post("/api/v1/members/join", userInfo);
}

//회원가입 사가

function* signUpRequestSaga({ payload }: any) {
    yield put(resetAlert());
    yield put(openAlert());
    try {
        const res = yield call(SignUpPost, payload);
        // 회원가입 성공시
        if (res.data.success) {
            yield put(isSignUpSuccessAlert());
            yield put(closeModal());
        } else {
            yield put(isSignUpFailAlert());
        }
    } catch (error) {
        console.log(error);
        yield put(isSignUpFailAlert());
    }
}

// 기존 회원가입 여부 판단 사가
function* nameAndPhoneSaga({ payload }: any) {
    console.log(payload);
    yield put(resetAlert());

    try {
        const res = yield call(memberCheckGet, payload);
        console.log(res.data.success);
        yield put(openAlert());
        //응답이 오면 그 응답에 맞게 필터링.
        if (res.data.success) {
            // 멤버가 아니면 유저 상태에 값 업데이트
            yield put(isMemberNo());
            yield put(setNameAndPhone(payload));
            yield put(notMemberAlert());
            console.log("회원가입 가능합니다.");
        } else {
            yield put(isMemberYes());
            yield put(isMemberAlert());
        }
    } catch (error) {
        alert(error);
        yield put(isMemberCheckFail(error));
    }
}

// 아이디 중복 여부 판단 사가
function* idDoubleCheckSaga({ payload }: any) {
    yield put(resetAlert());

    try {
        const res = yield call(idDoubleGet, payload);
        yield put(openAlert());
        if (res.data.success) {
            // 중복이 안되면
            yield put(idDoubleNo());
            yield put(setIdState(payload));
            yield put(idNotDoubleAlert());
            console.log("중복이 안됩니다.");
        } else {
            yield put(idDoubleYes());
            yield put(idDoubleAlert());
        }
    } catch (error) {
        console.log(error);
        yield put(idDoubleCheckFail(error));
    }
}

// 이메일 인증 사가
function* emailCheckSaga({ payload }: any) {
    yield put(resetAlert());
    try {
        const {
            data: {
                data: { verificationKey },
            },
        } = yield call(emailVerify, payload);
        console.log(verificationKey);
        yield put(emailVerifySuccess(verificationKey));
        yield put(setEmail(payload));
        yield put(openAlert());
        yield put(emailSendAlert());
    } catch (error) {
        console.log(error);
        yield emailVerifyFail(error);
    }
}

// 기존 회원인지 아닌지 계속 watch
function* watchsetNameAndPhoneSaga() {
    yield takeLatest(isMemberCheckReq, nameAndPhoneSaga);
}
// 아이디 중복 여부 계속 watch
function* watchIdDoubleCheckSaga() {
    yield takeLatest(idDoubleCheckReq, idDoubleCheckSaga);
}

// 이메일 리퀘스트 watch
function* watchEmailCheckSaga() {
    yield takeLatest(emailVerifyReq, emailCheckSaga);
}

// 회원가입 요청 watch
function* watchsignUpRequestSaga() {
    yield takeLatest(signUpReq, signUpRequestSaga);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function* SignUpSaga(): Generator {
    yield all([
        fork(watchsetNameAndPhoneSaga),
        fork(watchIdDoubleCheckSaga),
        fork(watchEmailCheckSaga),
        fork(watchsignUpRequestSaga),
    ]);
}
