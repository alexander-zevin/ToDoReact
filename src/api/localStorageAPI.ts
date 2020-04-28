import {ITask} from "../store/types";

export const setToLocalStorage = (tasks: Array<ITask>) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getFromLocalStorage = (): Array<ITask> => {
    return JSON.parse(localStorage.getItem('tasks') as string);
};
