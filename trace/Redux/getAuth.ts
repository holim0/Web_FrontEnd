import { createSlice } from "@reduxjs/toolkit";

// 새로고침시 필요한 상태관리

export const AuthState = {
    isloading: false,
    error: null,
};

export const getAuth = createSlice({
    initialState: AuthState,
    name: "getAuth",
    reducers: {
        getAuthbyTokenReq: (state) => {
            state.isloading = true;
        },

        getAuthbyTokenReqSuccess: (state) => {
            state.isloading = false;
        },
        getAuthbyTokenReqFail: (state, { payload }) => {
            state.isloading = false;
            state.error = payload;
        },
    },
});

export const {
    getAuthbyTokenReq,
    getAuthbyTokenReqSuccess,
    getAuthbyTokenReqFail,
} = getAuth.actions;

export default getAuth.reducer;
