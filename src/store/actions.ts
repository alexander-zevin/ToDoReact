import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_PERFORMED, SET_TAG, SET_TASKS} from "./constants";
import {ITask} from "./types";

interface IAddTaskAction { type: typeof ADD_TASK, id: number, text: string }
export const addTaskActionCreator = (id: number, text: string): IAddTaskAction => ({type: ADD_TASK, id, text});

interface IDeleteTaskAction {type: typeof DELETE_TASK, id: number}
export const deleteTaskActionCreator = (id: number): IDeleteTaskAction => ({type: DELETE_TASK, id});

interface ISetPerformedAction {type: typeof SET_PERFORMED, id: number}
export const setPerformedActionCreator = (id: number): ISetPerformedAction => ({type: SET_PERFORMED, id});

interface ISaveTaskAction {type: typeof SAVE_TASK, id: number, text: string}
export const saveTaskActionCreator = (id: number, text: string): ISaveTaskAction => ({type: SAVE_TASK, id, text});

interface ISetTasksAction {type: typeof SET_TASKS, tasks: Array<ITask>}
export const setTasksActionCreator = (tasks: Array<ITask>): ISetTasksAction => ({type: SET_TASKS, tasks});

interface ISetTagAction {type: typeof SET_TAG, id: number}
export const setTagActionCreator = (id: number): ISetTagAction => ({type: SET_TAG, id});

export type ActionType = IAddTaskAction | IDeleteTaskAction | ISetPerformedAction | ISaveTaskAction | ISetTasksAction | ISetTagAction;

