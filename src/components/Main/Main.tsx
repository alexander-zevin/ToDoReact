import React from 'react';
import {Add} from "./Add/Add";
import {TasksContainer} from "./Tasks/TasksContainer";
import Paper from "@material-ui/core/Paper";
import styles from './Main.module.scss';
import {MainPropsType} from "./MainTypes";

export const Main: React.FC<MainPropsType> = (
    {setInputText, inputValue, addTask, tasks, deleteTasks, setPerformed, saveTask}) => {

    return (
        <Paper className={styles.paper} elevation={3}>
            <Add setInputText={setInputText} inputValue={inputValue} addTask={addTask} />
            <TasksContainer
                tasks={tasks}
                deleteTasks={deleteTasks}
                setPerformed={setPerformed}
                saveTask={saveTask}
            />
        </Paper>
    )
};