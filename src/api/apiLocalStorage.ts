import {IListState} from "../store/list/listTypes";

export const apiLocalStorage = {
    setState: (state: IListState) => {
        localStorage.setItem('tasks', JSON.stringify(state));
    },
    getState: () => {
        return JSON.parse(localStorage.getItem('tasks') as string);
    }
};

