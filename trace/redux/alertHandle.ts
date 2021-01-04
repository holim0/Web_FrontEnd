import { createSlice } from "@reduxjs/toolkit";
import { AlertType } from "../@types/interface";

/// 알림창의 상태를 제어하는 곳입니다.

export const AlertState: AlertType = {
    isLoginDone: false,
    isLoginFail: false,
    isSignUpDone: false,
    isSignUpFail: false,
    isMember: false,
    notMember: false,
    emailSend: false,
    emailVerifyDone: false,
    emailVerifyFail: false,
    idDouble: false,
    idNotDouble: false,
    alertOpen: false,
};

export const alertHandle = createSlice({
    name: "alertHandle",
    initialState: AlertState,
    reducers: {
        resetAlert: (state) => {
            return AlertState;
        },
        loginSuccessAlert: (state) => {
            state.isLoginDone = true;
        },

        loginFailAlert: (state) => {
            state.isLoginFail = true;
        },
        isSignUpSuccessAlert: (state) => {
            state.isSignUpDone = true;
        },

        isSignUpFailAlert: (state) => {
            state.isSignUpFail = true;
        },

        isMemberAlert: (state) => {
            state.isMember = true;
        },

        notMemberAlert: (state) => {
            state.notMember = true;
        },

        emailSendAlert: (state) => {
            state.emailSend = true;
        },
        emailVerifySuccessAlert: (state) => {
            state.emailVerifyDone = true;
        },

        emailVerifyFailAlert: (state) => {
            state.emailVerifyFail = true;
        },
        idDoubleAlert: (state) => {
            state.idDouble = true;
        },
        idNotDoubleAlert: (state) => {
            state.idNotDouble = true;
        },
        closeAlert: (state) => {
            state.alertOpen = false;
        },
        openAlert: (state) => {
            state.alertOpen = true;
        },
    },
});

export const {
    resetAlert,
    loginSuccessAlert,
    loginFailAlert,
    isSignUpSuccessAlert,
    isSignUpFailAlert,
    isMemberAlert,
    notMemberAlert,
    emailSendAlert,
    emailVerifySuccessAlert,
    emailVerifyFailAlert,
    idDoubleAlert,
    idNotDoubleAlert,
    closeAlert,
    openAlert,
} = alertHandle.actions;

export default alertHandle.reducer;
