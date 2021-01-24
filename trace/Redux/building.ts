import { createSlice } from "@reduxjs/toolkit";
import { BuildingType } from "../@types/interface";
import { stat } from "fs";
import { start } from "repl";

interface initialType {
    isloading: boolean;
    err: any;
    isSuccess: boolean;
    isFail: boolean;
    content: BuildingType[] | null;
}

export const initialState: initialType = {
    isloading: false,
    err: null,
    isSuccess: false,
    isFail: false,
    content: null,
};

const building = createSlice({
    initialState: initialState,
    name: "building",
    reducers: {
        // 메인 페이지에 보여줄 빌딩 정보 요청
        buildingInfoReq: (state) => {
            state.isloading = true;
        },

        buildingInfoSuccess: (state, { payload }) => {
            state.isloading = false;
            state.isSuccess = true;
            state.content = payload;
        },

        buildingInfoFail: (state) => {
            state.isloading = false;
            state.isFail = true;
        },

        // 지역별로 건물 정보 요청
        buildingInfoReqByLocation: (state, { payload }) => {
            state.isloading = true;
        },
        buildingInfoByLocationSuccess: (state, { payload }) => {
            state.isSuccess = true;
            state.content = payload;
        },

        buildingInfoByLocationFail: (state) => {
            state.isloading = false;
            state.isFail = true;
        },
    },
});

export const {
    buildingInfoReq,
    buildingInfoSuccess,
    buildingInfoFail,
    buildingInfoReqByLocation,
    buildingInfoByLocationSuccess,
    buildingInfoByLocationFail,
} = building.actions;

export default building.reducer;
