import {Dispatch} from "redux";
import {setStateActionCreator} from "./listActions";
import {IListState, ISetStateAction} from "./listTypes";
import {apiLocalStorage} from "../../api/apiLocalStorage";
import {initializedSuccessActionCreator} from "../app/appActions";
import {IInitializedSuccessAction} from "../app/appTypes";

export const getStateThunkCreator = () => (dispatch: Dispatch<ISetStateAction | IInitializedSuccessAction>) => {
    const stateLocalStorage: IListState = apiLocalStorage.getState();
    setTimeout(() => {
        if (stateLocalStorage !== null) {
            dispatch(setStateActionCreator(stateLocalStorage));
            dispatch(initializedSuccessActionCreator(false))
        }
    }, 2000);
};
