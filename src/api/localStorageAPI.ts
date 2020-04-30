import {IState} from "../store/types";

export const setToLocalStorage = (state: IState) => {
        localStorage.setItem('tasks', JSON.stringify(state));
};

export const getFromLocalStorage = (): IState => {
    return JSON.parse(localStorage.getItem('tasks') as string);
};
