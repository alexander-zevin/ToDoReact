import React from 'react';
import styles from './ToDoInput.module.css';

export const ToDoInput = ({inputValue, setInputText, addTask}) => (
    <div className={styles.inputBlock}>
        <input
            className={styles.addInput}
            type='text'
            size='30'
            name='entryField'
            value={inputValue}
            onChange={e => setInputText(e.target.value)}
        />
        <button className={styles.btn} onClick={ () => {addTask(inputValue)} }>Add</button>
    </div>
);