import React, {useState} from 'react';
import styles from './Task.module.css';


export const Task = ({id, text, deleteTasks, updateTextInput}) => {
    const [isEditMode, toggleEditMode] = useState(false);

    return (
        <div>
            {isEditMode ?
                <input className={styles.editModeInput}
                       type='text'
                       size='30'
                       value={text}
                       onChange={(e) => {
                           updateTextInput(e.target.value, id)
                       }}
                       onBlur={() => {
                           toggleEditMode(!isEditMode)
                       }}
                /> :
                <div className={styles.tasks} id={id} onDoubleClick={() => {
                    toggleEditMode(!isEditMode)
                }}>
                    <span>{text}</span>
                    <button className={styles.btn} onClick={() => deleteTasks(id)}>
                        <img src='img/del1.png' alt='Что?'/>
                    </button>
                </div>
            }
        </div>
    )
};