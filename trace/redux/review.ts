// 리뷰 글쓰기 리덕스입니다.
import { createSlice } from "@reduxjs/toolkit";
import { ReviewWrite } from "../@types/interface";

export interface ReviewState {
    isSell: boolean;
    write: ReviewWrite;
    fileListImg: File[];
    isErr: boolean;
}

export const reviewState: ReviewState = {
    isSell: false,
    isErr: false,
    fileListImg: [],
    write: {
        roomNumber: "경기도",
        buildingId: 1,
        images: [],
        rentType: "MONTHLY",
        deposit: 0,
        area: 0,
        monthlyRent: 0,
        score: 0,
        livingStart: null,
        livingEnd: null,
        remodeled: true,
        waterPressure: "GOOD",
        lighting: "GOOD",
        frozen: "GOOD",
        bug: "SOMETIMES",
        noise: "QUIET",
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
            state.write.buildingId = payload.buildingId;
            state.write.area = payload.area;
            state.write.roomNumber = payload.roomNumber;
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
        reviewWriteSubmit: (state, { payload }) => {},
        reviewWriteSuccess: (state) => {},
        reviewWriteFailure: (state, { payload }) => {
            state.isErr = payload;
        },
    },
});

export const {
    reviewWriteSubmit,
    reviewWrite,
    reviewWriteSuccess,
    reviewWriteFailure,
} = review.actions;

export default review.reducer;
