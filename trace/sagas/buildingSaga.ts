import { all, fork, takeLatest, put, call, take } from "redux-saga/effects";
import axios from "axios";
import {
    buildingInfoReq,
    buildingInfoSuccess,
    buildingInfoFail,
} from "Redux/building";
// 메인 화면에 보여줄 건물 정보 요청
function mainBuildingInfoApi() {
    return axios.get("/api/v1/buildings");
}

function* mainBuildingInfo() {
    try {
        const res = yield call(mainBuildingInfoApi);
        const value = res.data.data.content;

        if (res.data.success) {
            yield put(buildingInfoSuccess(value));
        } else {
            yield put(buildingInfoFail());
        }
    } catch (e) {
        console.log(e);
        yield put(buildingInfoFail());
    }
}

function* watchMainBuildingInfo() {
    yield takeLatest(buildingInfoReq, mainBuildingInfo);
}

function* buildingSaga() {
    yield all([fork(watchMainBuildingInfo)]);
}
