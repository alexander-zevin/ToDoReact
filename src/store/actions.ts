import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_FILTER, SET_PERFORMED, SET_STATE, SET_TAG} from "./constants";
import {IState} from "./types";

interface IAddTaskAction { type: typeof ADD_TASK, id: number, text: string, date: string}
export const addTaskActionCreator = (id: number, text: string, date: string): IAddTaskAction => ({type: ADD_TASK, id, text, date});

interface IDeleteTaskAction {type: typeof DELETE_TASK, id: number}
export const deleteTaskActionCreator = (id: number): IDeleteTaskAction => ({type: DELETE_TASK, id});

interface ISetPerformedAction {type: typeof SET_PERFORMED, id: number}
export const setPerformedActionCreator = (id: number): ISetPerformedAction => ({type: SET_PERFORMED, id});

interface ISaveTaskAction {type: typeof SAVE_TASK, id: number, text: string}
export const saveTaskActionCreator = (id: number, text: string): ISaveTaskAction => ({type: SAVE_TASK, id, text});

interface ISetStateAction {type: typeof SET_STATE, state: IState}
export const setStateActionCreator = (state: IState): ISetStateAction => ({type: SET_STATE, state});

interface ISetTagAction {type: typeof SET_TAG, id: number}
export const setTagActionCreator = (id: number): ISetTagAction => ({type: SET_TAG, id});

interface ISetFilterAction {type: typeof SET_FILTER, option: string}
export const setFilterActionCreator = (option: string): ISetFilterAction => ({type: SET_FILTER, option});

export type ActionType = IAddTaskAction | IDeleteTaskAction | ISetPerformedAction | ISaveTaskAction | ISetStateAction
    | ISetTagAction | ISetFilterAction;

