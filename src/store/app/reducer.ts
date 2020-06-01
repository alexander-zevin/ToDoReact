import {IAppState, IInitializedSuccessAction} from "./types";
import {INITIALIZED_SUCCESS} from "./constants";

const initialState: IAppState = {
    initialized: false
};

export const reducer = (state = initialState, action: IInitializedSuccessAction) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: action.initialized
        }
    } else return state
};
