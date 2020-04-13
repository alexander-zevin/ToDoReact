import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Task} from "./Task/Task";
import {
    addTaskActionCreator,
    deleteTaskActionCreator,
    setInputTextActionCreator,
    updateTextEditModeActionsCreator
} from "../../store/toDoActions";
import {ToDo} from "./ToDo";

export const ToDoContainer = () => {
    const {tasks, inputValue} = useSelector(state => state.toDo, shallowEqual);

    const dispatch = useDispatch();

    const addTask = text => {
        dispatch(addTaskActionCreator(tasks.length + 1, text))
    };

    const setInputText = newText => {
        dispatch(setInputTextActionCreator(newText))
    };

    const deleteTasks = id => {
        dispatch(deleteTaskActionCreator(id));
    };

    const updateTextInput = (newText, id) => {
        let newTasks = tasks.filter(i => {
            if (i.id === id) {
                i.text = newText
            }
            return tasks;
        });
        dispatch(updateTextEditModeActionsCreator(newTasks))
    };

    //Создаём массив компонентов
    const taskElement = tasks.map(t =>
        <Task id={t.id} text={t.text} key={t.id} deleteTasks={deleteTasks} updateTextInput={updateTextInput} />
    );

    return <ToDo inputValue={inputValue} setInputText={setInputText} addTask={addTask} taskElement={taskElement} />
};
