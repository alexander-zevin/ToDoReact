import {IAppState, IInitializedSuccessAction} from "./appTypes";
import {INITIALIZED_SUCCESS} from "./appConstants";

const initialState: IAppState = {
    initialized: true
};

export const appReducer = (state = initialState, action: IInitializedSuccessAction) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: action.initialized
        }
    } else return state
};
