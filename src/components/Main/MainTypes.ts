import {ITask} from "../../store/types";

export interface ISetInputText {
    (newText: string): void
}

export interface IAddTask extends ISetInputText {}

export interface IDeleteTasks {
    (id: number): void
}

export interface ISetPerformed extends IDeleteTasks {}

export interface ISaveTask {
    (id: number, text: string): void
}

export interface IHandleSnackbarClick {
    (open: boolean): void
}

export interface MainPropsType {
    setInputText: ISetInputText,
    inputValue: string,
    addTask: IAddTask,
    tasks: Array<ITask>,
    deleteTasks: IDeleteTasks,
    setPerformed: ISetPerformed,
    saveTask: ISaveTask
    openMessage: boolean
    handleSnackbarClick: IHandleSnackbarClick
}

