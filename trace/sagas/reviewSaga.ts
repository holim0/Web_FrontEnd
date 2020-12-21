import { all, fork, takeLatest } from "redux-saga/effects";
import { reviewWriteSubmit } from "redux/review";

function* writeSubmit() {
    yield takeLatest(reviewWriteSubmit, () => console.log("saga"));
}

export default function* reviewSaga(): Generator {
    yield all([fork(writeSubmit)]);
}
