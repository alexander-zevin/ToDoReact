import React from 'react';
import s from './ToDo.module.css';
import {ToDoInput} from "./ToDoInput/ToDoInput";
import {useDispatch, useSelector} from "react-redux";
import {Task} from "./Task/Task";
import {addTaskActionCreator, setInputTextActionCreator} from "../../store/toDoActions";

export const ToDo = () => {
    const tasks = useSelector(state => state.toDo.tasks);
    const inputValue = useSelector(state => state.toDo.inputValue);

    const dispatch = useDispatch();
    const addTask = (text) => {
        let id = tasks.length + 1;
        dispatch(addTaskActionCreator(id, text))
    };
    const setInputText = newText => {
        dispatch(setInputTextActionCreator(newText))
    };

    //Создаём массив компонентов
    const taskElement = tasks.map(t => <Task id={t.id} text={t.text} key={t.id}/>);

    return (
        <div className={s.todo}>
            <ToDoInput inputValue={inputValue} setInputText={setInputText} addTask={addTask}/>
            {taskElement}
        </div>
    )
};
