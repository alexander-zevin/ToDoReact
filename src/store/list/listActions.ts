import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_FILTER, SET_PERFORMED, SET_STATE, SET_TAG} from "./listConstants";
import {
    IAddTaskAction,
    IDeleteTaskAction,
    IListState,
    ISaveTaskAction,
    ISetFilterAction,
    ISetPerformedAction,
    ISetStateAction,
    ISetTagAction
} from "./listTypes";

export const addTaskActionCreator = (id: number, text: string, date: string): IAddTaskAction =>
    ({type: ADD_TASK, id, text, date});

export const deleteTaskActionCreator = (id: number): IDeleteTaskAction => ({type: DELETE_TASK, id});

export const setPerformedActionCreator = (id: number): ISetPerformedAction => ({type: SET_PERFORMED, id});

export const saveTaskActionCreator = (id: number, text: string): ISaveTaskAction => ({type: SAVE_TASK, id, text});

export const setStateActionCreator = (state: IListState): ISetStateAction => ({type: SET_STATE, state});

export const setTagActionCreator = (id: number): ISetTagAction => ({type: SET_TAG, id});

export const setFilterActionCreator = (option: string): ISetFilterAction => ({type: SET_FILTER, option});


