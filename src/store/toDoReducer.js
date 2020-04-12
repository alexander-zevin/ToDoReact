const ADD_TASK = 'ADD_TASK';
const SET_INPUT_TEXT = 'SET_INPUT_TEXT';

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

export const addTaskActionCreator = (id, text) => ({type: ADD_TASK, id, text});
export const setInputTextActionCreator = newText => ({type: SET_INPUT_TEXT, newText});