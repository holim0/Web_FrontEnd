import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
    buildingReviewReq,
    buildingReviewReqFail,
    buildingReviewReqSuccess,
} from "Redux/buildingReview";
import { PayloadAction } from "@reduxjs/toolkit";

const reviewReqApi = (buildingId: Number) => {
    return axios.get(`/api/v1/reviews/buildingId=${buildingId}`);
};

function* getBuildingReview({ payload }: PayloadAction<Number>) {
    try {
        const res = yield call(reviewReqApi, payload);
        const reviewList = res.data.data.content;
        if (res.data.success) {
            yield put(buildingReviewReqSuccess(reviewList));
        } else {
            alert("에러!");
        }
    } catch (e) {
        yield put(buildingReviewReqFail(e));
    }
}

function* watchBuildingReviewSaga() {
    yield takeLatest(buildingReviewReq, getBuildingReview);
}

export default function* buildingReviewSaga() {
    yield all([fork(watchBuildingReviewSaga)]);
}
