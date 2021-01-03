// 회원 가입 상태 파일
import { createSlice } from "@reduxjs/toolkit";
import { SignUpType } from "../@types/interface";

// 회원 가입 상태 (기존 회원 여부, 아이디 중복여부)
export const SignUpState: SignUpType = {
    isloading: false,
    isMember: false,
    isDouble: true,
    error: null,
    verifyNum: "", /// 이메일 인증 번호
};

//유저 상태 리듀서
export const SignUp = createSlice({
    name: "SignUp",
    initialState: SignUpState,
    reducers: {
        // 기존 회원인지 먼저 리퀘스트
        isMemberCheckReq: (state, { payload }) => {
            state.isloading = true;
        },
        // 기존 회원이면 회원가입 허가 안댐
        isMemberYes: (state) => {
            state.isMember = true;
            state.isloading = false;
        },

        // 기존 회원이 아니면 회원가입 허가
        isMemberNo: (state) => {
            state.isMember = false;
            state.isloading = false;
        },

        // 요청 실패
        isMemberCheckFail: (state, { payload }) => {
            state.isloading = false;
            state.error = payload;
        },

        // 아이디 중복 체크 요청
        idDoubleCheckReq: (state, { payload }) => {
            state.isloading = true;
        },

        // 아이디 중복되면
        idDoubleYes: (state) => {
            state.isloading = false;
            state.isDouble = true;
        },

        // 아이디 중복 안되면
        idDoubleNo: (state) => {
            state.isloading = false;
            state.isDouble = false;
        },

        // 요청 실패하면
        idDoubleCheckFail: (state, { payload }) => {
            state.isloading = false;
            state.isDouble = true;
            state.error = payload;
        },

        // 이메일 인증 요청
        emailVerifyReq: (state, { payload }) => {
            state.isloading = true;
        },
        // 이메일 인증 요청 성공시 검증 번호 저장.
        emailVerifySuccess: (state, { payload }) => {
            state.isloading = false;
            state.verifyNum = payload;
        },
        // 이메일 인증 요청 실패
        emailVerifyFail: (state, { payload }) => {
            state.isloading = false;
            state.error = payload;
        },

        signUpReq: (state, { payload }) => {},
    },
});

export const {
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
} = SignUp.actions;

export default SignUp.reducer;
