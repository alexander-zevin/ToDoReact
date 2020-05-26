import {IAppState, IInitializedSuccessAction} from "./types";
import {INITIALIZED_SUCCESS} from "./constants";
import {useMediaQuery} from "react-responsive";

const initialState: IAppState = {
    initialized: false,
    isMobile: useMediaQuery({ maxWidth: 600 })
};

export const reducer = (state = initialState, action: IInitializedSuccessAction) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: action.initialized
        }
    } else return state
};
