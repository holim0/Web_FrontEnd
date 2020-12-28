import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
    reviewWriteFailure,
    reviewWriteSubmit,
    reviewWriteSuccess,
} from "Redux/review";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { ReviewWrite } from "../@types/interface";
import { dataUrlToFile } from "lib/dataUrlToFile";

// 글쓰기 업로드 서버에 요청

function writePost(data: any) {
    return axios.post("/api/v1/reviews", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

function* writeSubmit({ payload }: PayloadAction<ReviewWrite>) {
    try {
        const formData = yield call(dataUrlToFile, payload, "image");
        yield call(writePost, formData);
        yield put(reviewWriteSuccess());
    } catch (err) {
        console.error(err);
        yield put(reviewWriteFailure(err.message));
    }
}

// 글쓰기 업데이트 상황 지켜보는 것.
function* watchWriteSubmit() {
    yield takeLatest(reviewWriteSubmit, writeSubmit);
}

export default function* reviewSaga(): Generator {
    yield all([fork(watchWriteSubmit)]);
}
