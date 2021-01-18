import { createSlice } from "@reduxjs/toolkit";
import { BuildingType } from "../@types/interface";
import { stat } from "fs";

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
    },
});

export const {
    buildingInfoReq,
    buildingInfoSuccess,
    buildingInfoFail,
} = building.actions;

export default building.reducer;
