import {ADD_TASK, SET_INPUT_TEXT} from "./toDoConstants";

const initialState = {
    tasks: [],
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
        default: return state;
    }
};