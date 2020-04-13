import {ADD_TASK, DELETE_TASK, SET_INPUT_TEXT, UPDATE_TEXT_TEXT_EDIT_MODE} from "./toDoConstants";

const initialState = {
    tasks: [{id: 1, text: 'text1'}],
    inputValue: ''

};

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_TEXT: {
            return {...state, inputValue: action.newText}
        }
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, text: action.text}],
                inputValue: ''
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(i => i.id !== action.id)
            }
        }
        case UPDATE_TEXT_TEXT_EDIT_MODE: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        default: return state;
    }
};