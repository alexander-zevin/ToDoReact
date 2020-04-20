import React, {FC} from 'react';
import styles from './Tasks.module.scss'
import {Box} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Task} from "./Task/Task";
import {ITasksProps} from "./TasksTypes";
import {Message} from "./Message/Message";

export const Tasks: FC<ITasksProps> = ({tasks, deleteTasks, setPerformed, saveTask, selectedIndex,
                                           handleListItemClick, editModeIndex, handleIconButtonClick, openMessage, handleSnackbarClick}) => {

    return (
        <Box className={styles.listBox}>
            <List>
                {tasks.map(item =>
                    <Task
                        item={item}
                        key={item.id}
                        deleteTasks={deleteTasks}
                        setPerformed={setPerformed}
                        handleListItemClick={handleListItemClick}
                        selectedIndex={selectedIndex}
                        saveTask={saveTask}
                        handleIconButtonClick={handleIconButtonClick}
                        editModeIndex={editModeIndex}
                    />
                )}
            </List>
            <Message openMessage={openMessage} handleSnackbarClick={handleSnackbarClick}/>
        </Box>
    );
};