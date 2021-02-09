import { searchReq, searchSuccess, searchFail } from "Redux/Search";
import axios from "axios";
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import { AnyAction } from "node_modules/redux";

const searchApiReq = (address: string, lotNumber: string) => {
    return axios.get(
        `/api/v1/buildings?address=${address}&lotNumber=${lotNumber}`
    );
};

function* searchSagaFunc({ payload }: AnyAction) {
    try {
        const res = yield call(
            searchApiReq,
            payload.address,
            payload.lotNumber
        );
        console.log(res);
        if (res.data.success) {
            yield put(searchSuccess(res.data.data.content));
        } else {
            alert("오류 발생!");
            yield put(searchFail());
        }
    } catch (e) {
        alert("오류 발생!");
        yield put(searchFail());
    }
}

function* watchSearchSaga() {
    yield takeLatest(searchReq, searchSagaFunc);
}

export default function* searchSaga(): Generator {
    yield all([fork(watchSearchSaga)]);
}
