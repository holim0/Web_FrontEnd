import { combineReducers } from "node_modules/redux";
import { HYDRATE } from "next-redux-wrapper";
import review from "./review";
import userSignUp from "./SignUp";

const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                review,
                userSignUp,
            });
            return combineReducer(state, action);
        }
    }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
