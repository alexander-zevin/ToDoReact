import React from 'react';
import s from './ToDo.module.css';
import {ToDoInput} from "./ToDoInput/ToDoInput";

export const ToDo = ({inputValue, setInputText, addTask, taskElement}) => {
    return (
        <div className={s.todo}>
            <ToDoInput inputValue={inputValue} setInputText={setInputText} addTask={addTask} />
            {taskElement}
        </div>
    )
};
