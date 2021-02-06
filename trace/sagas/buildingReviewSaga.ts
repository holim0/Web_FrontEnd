import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
    buildingReviewReq,
    buildingReviewReqFail,
    buildingReviewReqSuccess,
} from "Redux/buildingReview";
import { PayloadAction } from "@reduxjs/toolkit";

const reviewReqApi = (buildingId: Number) => {
    console.log(buildingId);
    return axios.get(`/api/v1/reviews?buildingId=${buildingId}`);
};

function* getBuildingReview({ payload }: PayloadAction<Number>) {
    try {
        console.log(payload);
        const res = yield call(reviewReqApi, payload);
        const reviewList = res.data.data.content;
        console.log(res.data);
        if (res.data.success) {
            yield put(buildingReviewReqSuccess(reviewList));
        } else {
            alert("에러!");
        }
    } catch (e) {
        console.log(e);
        yield put(buildingReviewReqFail(e));
    }
}

function* watchBuildingReviewSaga() {
    yield takeLatest(buildingReviewReq, getBuildingReview);
}

export default function* buildingReviewSaga() {
    yield all([fork(watchBuildingReviewSaga)]);
}
