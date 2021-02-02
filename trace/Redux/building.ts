import { createSlice } from "@reduxjs/toolkit";
import { BuildingType } from "../@types/interface";

interface initialType {
    isLoading: boolean;
    err: any;
    isSuccess: boolean;
    isFail: boolean;
    content: BuildingType[] | null;
    curLocation : string;
}

export const initialState: initialType = {
    isLoading: false,
    err: null,
    isSuccess: false,
    isFail: false,
    content: null,
    curLocation : "",
};

const building = createSlice({
    initialState: initialState,
    name: "building",
    reducers: {
        // 메인 페이지에 보여줄 빌딩 정보 요청
        buildingInfoReq: (state) => {
            state.isLoading = true;
        },

        buildingInfoSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.content = payload;
        },

        buildingInfoFail: (state) => {
            state.isLoading = false;
            state.isFail = true;
        },

        // 지역별로 건물 정보 요청
        buildingInfoReqByLocation: (state, { payload }) => {
            state.isLoading = true;
            state.curLocation= payload.locationTarget;
        },
        buildingInfoByLocationSuccess: (state, { payload }) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.content = payload;
            
        },

        buildingInfoByLocationFail: (state) => {
            state.isLoading = false;
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
