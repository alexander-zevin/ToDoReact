import React, {FC, useEffect} from 'react';
import {useState} from "react";
import {Tasks} from "./Tasks";
import {IHandleIconButtonClick, IHandleListItemClick, ITasksContainerProps} from "./TasksTypes";

export const TasksContainer: FC<ITasksContainerProps> = ({tasks, deleteTasks, setPerformed, saveTask}) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const handleListItemClick: IHandleListItemClick = index => {
        setSelectedIndex(index);
    };

    const [editModeIndex, setEditModeIndex] = useState<number | null>(null);
    const handleIconButtonClick: IHandleIconButtonClick = id => {
        setEditModeIndex(id)
    };

    useEffect(() => {
        setEditModeIndex(null);
    },[tasks]);


    return <Tasks
        tasks={tasks}
        deleteTasks={deleteTasks}
        setPerformed={setPerformed}
        saveTask={saveTask}
        selectedIndex={selectedIndex}
        handleListItemClick={handleListItemClick}
        editModeIndex={editModeIndex}
        handleIconButtonClick={handleIconButtonClick}
    />
};