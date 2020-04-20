import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_INPUT_TEXT, SET_PERFORMED, SET_TASKS} from "./constants";
import {ITask} from "./types";

interface IAddTaskAction { type: typeof ADD_TASK, id: number, text: string }
export const addTaskActionCreator = (id: number, text: string): IAddTaskAction => ({type: ADD_TASK, id, text});

interface ISetInputTextAction { type: typeof SET_INPUT_TEXT, newText: string }
export const setInputTextActionCreator = (newText: string): ISetInputTextAction => ({type: SET_INPUT_TEXT, newText});

interface IDeleteTaskAction {type: typeof DELETE_TASK, id: number}
export const deleteTaskActionCreator = (id: number): IDeleteTaskAction => ({type: DELETE_TASK, id});

interface ISetPerformedAction {type: typeof SET_PERFORMED, id: number}
export const setPerformedActionCreator = (id: number): ISetPerformedAction => ({type: SET_PERFORMED, id});

interface ISaveTaskAction {type: typeof SAVE_TASK, id: number, text: string}
export const saveTaskActionCreator = (id: number, text: string): ISaveTaskAction => ({type: SAVE_TASK, id, text});

interface ISetTasksAction {type: typeof SET_TASKS, tasks: Array<ITask>}
export const setTasksActionCreator = (tasks: Array<ITask>): ISetTasksAction => ({type: SET_TASKS, tasks});

export type ActionType = IAddTaskAction | ISetInputTextAction | IDeleteTaskAction |
    ISetPerformedAction | ISaveTaskAction | ISetTasksAction;

