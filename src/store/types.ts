import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_INPUT_TEXT, SET_PERFORMED} from "./constants";

export interface ITask {
    id: number,
    text: string,
    isPerformed: boolean
}
export interface IState {
    tasks: ITask[],
    inputValue: string
}

/*
interface IAddTaskAction {
    type: typeof ADD_TASK,
    id: number,
    text: string
}

interface ISetInputTextAction {
    type: typeof SET_INPUT_TEXT,
    newText: string
}

interface IDeleteTaskAction {
    type: typeof DELETE_TASK,
    id: number
}

interface ISetPerformedAction {
    type: typeof SET_PERFORMED,
    id: number
}

interface ISaveTaskAction {
    type: typeof SAVE_TASK,
    id: number,
    text: string
}

export type ActionType = IAddTaskAction | ISetInputTextAction | IDeleteTaskAction | ISetPerformedAction | ISaveTaskAction;*/
