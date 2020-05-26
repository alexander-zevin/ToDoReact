import {INITIALIZED_SUCCESS} from "./constants";
import {IInitializedSuccessAction} from "./types";

export const initializedSuccessActionCreator = (initialized: boolean): IInitializedSuccessAction =>
    ({type: INITIALIZED_SUCCESS, initialized});