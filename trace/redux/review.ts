// 리뷰 글쓰기 리덕스입니다.
import { createSlice } from "@reduxjs/toolkit";
import { ReviewWrite } from "../@types/interface";

export interface ReviewState {
    isSell: boolean;
    write: ReviewWrite;
}

export const reviewState: ReviewState = {
    isSell: false,
    write: {
        roomNumber: "",
        images: [],
        rentType: "월세",
        deposit: 0,
        monthlyRent: 0,
        score: 0,
        livingStart: null,
        livingEnd: null,
        remodeled: true,
        waterPressure: "좋아요",
        lighting: "좋아요",
        frozen: "없어요",
        bug: "가끔나와요",
        noise: "독서실",
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
        reviewWrite: (state, { payload }) => {
            state.isSell = payload.isSell;
            state.write.roomNumber = payload.roomNumber;
            state.write.images = payload.images;
            state.write.rentType = payload.rentType;
            state.write.deposit = payload.deposit;
            state.write.monthlyRent = payload.monthlyRent;
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
            state.write.durationStart = payload.durationStart;
            state.write.durationEnd = payload.durationEnd;
        },
        reviewWriteSubmit: (state, { payload }) => {
            state = payload;
        },
    },
});

export const { reviewWriteSubmit, reviewWrite } = review.actions;

export default review.reducer;
