// 리뷰 글쓰기 리덕스입니다.
import { createSlice } from "@reduxjs/toolkit";
import { ReviewWrite } from "../@types/interface";

export interface ReviewState {
    isLoading: boolean;
    isSuccess: boolean;
    isFail: boolean;
    isSell: boolean;
    write: ReviewWrite;
    fileListImg: File[];
}

export const reviewState: ReviewState | undefined = {
    isSell: false,
    isFail: false,
    isSuccess: false,
    isLoading: false,
    fileListImg: [],
    write: {
        roomNumber: "",
        buildingId: null,
        images: [],
        rentType: "",
        deposit: 0,
        area: 0,
        monthlyRent: 0,
        score: 0,
        livingStart: null,
        livingEnd: null,
        remodeled: true,
        waterPressure: "",
        lighting: "",
        frozen: "",
        bug: "",
        noise: "",
        option: "",
        nearBy: "",
        trueStory: "",
        contact: "",
        durationStart: null,
        durationEnd: null,
    },
};

const review = createSlice({
    name: "review",
    initialState: reviewState,
    reducers: {
        reviewWriteReq: (state, { payload }) => {
            state.isLoading = true;
        },
        reviewWrite: (state, { payload }) => {
            state.isSell = payload.isSell;
            state.write.area = payload.area;
            state.write.images = payload.images;
            state.write.rentType = payload.rentType;
            state.write.deposit = payload.deposit;
            state.write.monthlyRent =
                state.write.rentType === "MONTHLY" ? payload.monthlyRent : "";
            state.write.score = payload.score;
            state.write.livingStart = payload.livingStart;
            state.write.livingEnd = payload.livingEnd;
            state.write.remodeled = payload.remodeled !== "";
            state.write.waterPressure = payload.waterPressure;
            state.write.lighting = payload.lighting;
            state.write.frozen = payload.frozen;
            state.write.bug = payload.bug;
            state.write.noise = payload.noise;
            state.write.option = payload.option;
            state.write.nearBy = payload.nearBy;
            state.write.trueStory = payload.trueStory;
            state.write.contact = payload.contact;
            state.write.durationStart = state.isSell
                ? payload.durationStart || null
                : undefined;
            state.write.durationEnd = state.isSell
                ? payload.durationEnd || null
                : undefined;
        },

        reviewWriteSuccess: (state) => {
            state.isSuccess = true;
            state.isLoading = false;
        },
        reviewWriteFail: (state) => {
            state.isLoading = false;
            state.isFail = true;
        },

        setBuildingNumber: (state, { payload }) => {
            state.write.buildingId = payload.id;
            state.write.roomNumber = payload.roomNumber;
        },

        resetState: (state) => {
            state = undefined;
        },
    },
});

export const {
    reviewWriteReq,
    reviewWrite,
    reviewWriteSuccess,
    reviewWriteFail,
    setBuildingNumber,
    resetState,
} = review.actions;

export default review.reducer;
