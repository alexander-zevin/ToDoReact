import {INITIALIZED_SUCCESS} from "./appConstants";
import {IInitializedSuccessAction} from "./appTypes";

export const initializedSuccessActionCreator = (initialized: boolean): IInitializedSuccessAction =>
    ({type: INITIALIZED_SUCCESS, initialized});