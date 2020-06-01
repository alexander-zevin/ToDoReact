import {INITIALIZED_SUCCESS} from "./constants";

export interface IAppState {
    initialized: boolean
}

export interface IInitializedSuccessAction {
    type: typeof INITIALIZED_SUCCESS,
    initialized: boolean
}
