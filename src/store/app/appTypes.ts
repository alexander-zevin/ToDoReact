import {INITIALIZED_SUCCESS} from "./appConstants";

export interface IAppState {
    initialized: boolean
}

export interface IInitializedSuccessAction {
    type: typeof INITIALIZED_SUCCESS,
    initialized: boolean
}
