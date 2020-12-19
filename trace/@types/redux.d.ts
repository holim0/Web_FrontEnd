import "redux";
import { Task } from "redux-saga";

// 사가 테스크 타입 선언

declare module "redux" {
    export interface Store {
        sagaTask?: Task;
    }
}
