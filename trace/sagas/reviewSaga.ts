import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
    reviewWriteFail,
    reviewWriteReq,
    reviewWriteSuccess,
} from "Redux/review";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { ReviewSubmit } from "../@types/interface";
import { dataUrlToFormData } from "lib/dataUrlToFormData";

function reviewWriteApiReq(data: any) {
    return axios.post("/api/v1/reviews", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

function* writeReviewSubmit({ payload }: PayloadAction<ReviewSubmit>) {
    try {
        console.log(payload);
        const formData = yield call(dataUrlToFormData, payload, "images");
        yield call(reviewWriteApiReq, formData);
        yield put(reviewWriteSuccess());
    } catch (err) {
        console.error(err);
        yield put(reviewWriteFail());
    }
}

// 글쓰기 업데이트 상황 지켜보는 것.
function* watchWriteReviewSubmit() {
    yield takeLatest(reviewWriteReq, writeReviewSubmit);
}

export default function* reviewWriteSaga(): Generator {
    yield all([fork(watchWriteReviewSubmit)]);
}
