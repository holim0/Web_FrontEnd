import { createSlice } from "@reduxjs/toolkit";

interface reviewType {}

const reviewState = {
    isLoading: false,
    reviewList: [],
    err: null,
};

const buildingReview = createSlice({
    initialState: reviewState,
    name: "buildingReview",
    reducers: {
        buildingReviewReq: (state, { payload }) => {
            state.isLoading = true;
        },
        buildingReviewReqSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.reviewList = payload;
        },
        buildingReviewReqFail: (state, { payload }) => {
            state.isLoading = false;
            state.err = payload;
        },
    },
});

export const {
    buildingReviewReq,
    buildingReviewReqSuccess,
    buildingReviewReqFail,
} = buildingReview.actions;

export default buildingReview.reducer;
