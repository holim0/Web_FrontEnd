import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({});
            return combineReducer(state, action);
        }
    }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
