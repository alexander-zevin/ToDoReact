import {Dispatch} from "redux";
import {setStateActionCreator} from "./actions";
import {IListState, ISetStateAction} from "./types";
import {apiLocalStorage} from "../../api/apiLocalStorage";
import {initializedSuccessActionCreator} from "../app/actions";
import {IInitializedSuccessAction} from "../app/types";

export const getStateThunkCreator = () => (dispatch: Dispatch<ISetStateAction | IInitializedSuccessAction>) => {
    const stateLocalStorage: IListState = apiLocalStorage.getState();
    setTimeout(() => {
        if (stateLocalStorage !== null) {
            dispatch(setStateActionCreator(stateLocalStorage));
        }
        dispatch(initializedSuccessActionCreator(true))
    }, 2000);
};
