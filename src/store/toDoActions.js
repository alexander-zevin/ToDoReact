import {ADD_TASK, DELETE_TASK, SET_INPUT_TEXT, UPDATE_TEXT_TEXT_EDIT_MODE} from "./toDoConstants";

export const addTaskActionCreator = (id, text) => ({type: ADD_TASK, id, text});
export const setInputTextActionCreator = newText => ({type: SET_INPUT_TEXT, newText});
export const deleteTaskActionCreator = id => ({type: DELETE_TASK, id});
export const updateTextEditModeActionsCreator = tasks => ({type: UPDATE_TEXT_TEXT_EDIT_MODE, tasks});