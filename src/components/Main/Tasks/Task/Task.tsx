import React, {FC, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {Box} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import {useTaskStyles} from "./TaskStyles";
import {TaskInput} from "./TaskInput/TaskInput";
import {IHandleInputBaseChange, ITaskProps} from "./TaskTypes";

export const Task: FC<ITaskProps> = ({item, deleteTasks, setPerformed, handleListItemClick, selectedIndex,
                                          saveTask, handleIconButtonClick, editModeIndex}) => {

    let decoration = item.isPerformed ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
    const classes = useTaskStyles(decoration);

    const [inputTaskText, setInputTaskText] = useState(item.text);
    const handleInputBaseChange: IHandleInputBaseChange = value => {
        setInputTaskText(value);
    };

    return (
        <>
            {
                editModeIndex === item.id ?
                <TaskInput
                    inputTaskText={inputTaskText}
                    handleInputBaseChange={handleInputBaseChange}
                    saveTask={saveTask}
                    item={item}
                    handleIconButtonClick={handleIconButtonClick}
                /> :
                <Box>
                    <ListItem
                        key={item.id}
                        button
                        onClick={() => handleListItemClick(item.id)}
                        selected={selectedIndex === item.id}
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                color="primary"
                                checked={item.isPerformed}
                                onClick={() => {setPerformed(item.id)}}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.text} className={classes.root}/>
                        {selectedIndex === item.id &&
                            <ListItemSecondaryAction>
                                <Tooltip title="Edit" placement="top">
                                    <IconButton edge="end" onClick={() => {handleIconButtonClick(item.id)}}>
                                        <EditIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete" placement="top">
                                    <IconButton edge="end" onClick={() => {deleteTasks(item.id)}}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        }
                    </ListItem>
                </Box>
            }
        </>
    );
};