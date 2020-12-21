// 리뷰 글쓰기 리덕스입니다.
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    write: {
        roomNumber: string;
        images: any;
        rentType: string;
        deposit: number;
        monthlyRent: number;
        score: number;
        area: number;
        livingStart: Date | number;
        livingEnd: Date | number;
        remodel: false;
        waterPressure: string;
        lighting: string;
        frozen: string;
        bug: string;
        noise: string;
        option: string;
        nearBy: string;
        trueStory: string;
        contact: string;
        durationStart: Date | number;
        durationEnd: Date | number;
    };
}

const initialState: InitialState = {
    write: {
        roomNumber: "",
        images: [],
        rentType: "",
        deposit: 0,
        monthlyRent: 0,
        score: 0,
        area: 0,
        livingStart: Date.now(),
        livingEnd: Date.now(),
        remodel: false,
        waterPressure: "",
        lighting: "",
        frozen: "",
        bug: "",
        noise: "",
        option: "",
        nearBy: "",
        trueStory: "",
        contact: "",
        durationStart: Date.now(),
        durationEnd: Date.now(),
    },
};

const review = createSlice({
    name: "review",
    initialState,
    reducers: {
        reviewWrite: (state, { payload }) => {
            state.write = payload;
        },
        reviewWriteSubmit: (state, { payload }) => {
            state = payload;
        },
    },
});

export const { reviewWriteSubmit, reviewWrite } = review.actions;

export default review.reducer;
