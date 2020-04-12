import {ADD_TASK, SET_INPUT_TEXT} from "./toDoConstants";

export const addTaskActionCreator = (id, text) => ({type: ADD_TASK, id, text});
export const setInputTextActionCreator = newText => ({type: SET_INPUT_TEXT, newText});