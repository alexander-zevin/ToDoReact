import React from 'react';
import styles from './ToDoInput.module.css';

export const ToDoInput = ({inputValue, setInputText, addTask}) => (
    <div>
        <input
            type='text'
            size='40'
            name='entryField'
            value={inputValue}
            onChange={e => setInputText(e.target.value)}
        />
        <button onClick={ () => {addTask(inputValue)} }>Add</button>
    </div>
);