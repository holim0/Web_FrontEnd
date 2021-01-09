// 로그인 상태 관리

import { createSlice } from "@reduxjs/toolkit";
import { LoginType } from "../@types/interface";

export const LoginState: LoginType = {
    userId: "",
    password: "",
    isLoginSuccess: false,
    isloading: false,
    error: null,
};

export const Login = createSlice({
    name: "Login",
    initialState: LoginState,
    reducers: {
        loginReq: (state, { payload }) => {
            state.isloading = true;
            state.userId = payload.userId;
            state.password = payload.password;
        },

        loginSuccess: (state) => {
            state.isloading = false;
            state.isLoginSuccess = true;
        },

        loginFail: (state, { payload }) => {
            state.isloading = false;
            state.error = payload;
        },
        logoutReq: (state) => {
            state.isloading = true;
        },
        logoutSuccess: (state) => {
            state.userId = "";
            state.password = "";
            state.isLoginSuccess = false;
            state.isloading = false;
        },
        logoutFail: (state, { payload }) => {
            state.isloading = false;
            state.error = payload;
        },
    },
});

export const {
    loginReq,
    loginSuccess,
    loginFail,
    logoutReq,
    logoutSuccess,
    logoutFail,
} = Login.actions;

export default Login.reducer;
