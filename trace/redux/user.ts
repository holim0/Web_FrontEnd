// 유저의 정보를 저장하는 리듀서
// 유저 정보 리덕스
import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../@types/interface";

// 유저 상태
export const userState: UserType = {
    userId: "",
    password: "",
    email: "",
    name: "",
    phoneNum: "",
    preferences: [],
    accessToken: "",
    refreshToken: "",
};

//유저 상태 리듀서
export const user = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        //취향 저장
        preferenceWrite: (state, { payload }) => {
            state.preferences = payload;
        },
        //이름, 폰 저장
        setNameAndPhone: (state, { payload }) => {
            state.name = payload.name;
            state.phoneNum = payload.phoneNum;
        },
        // 아이디 저장
        setId: (state, { payload }) => {
            state.userId = payload;
        },
        // 비밀번호 저장
        setPassWord: (state, { payload }) => {
            state.password = payload;
        },
        // 이메일 저장
        setEmail: (state, { payload }) => {
            state.email = payload;
        },
        // 엑세스 , 리프레시 토큰 셋팅.
        setAccessAndRefreshToken: (state, { payload }) => {
            console.log(payload);
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
        },
    },
});

export const {
    preferenceWrite,
    setNameAndPhone,
    setId,
    setPassWord,
    setEmail,
    setAccessAndRefreshToken,
} = user.actions;

export default user.reducer;
