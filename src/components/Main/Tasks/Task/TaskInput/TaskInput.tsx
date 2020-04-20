import React, {FC} from "react";
import IconButton from "@material-ui/core/IconButton";
import {Box} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import SaveIcon from '@material-ui/icons/Save';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './TaskInput.module.scss'
import {ITaskInputProps} from "./TaskInputTypes";

export const TaskInput: FC<ITaskInputProps> = ({inputTaskText, handleInputBaseChange, saveTask,
                                                   item, handleIconButtonClick}) => {

    return (
        <Box className={styles.rootBox} >
            <Paper component="form" className={styles.paper}>
                <InputBase
                    className={styles.inputBase}
                    placeholder="Сhange the task text"
                    onChange={e => {handleInputBaseChange(e.target.value)}}
                    value={inputTaskText}
                    autoFocus
                />
                <Tooltip title="Save" placement="top">
                    <IconButton className={styles.iconButton} onClick={() => {saveTask(item.id, inputTaskText)}}>
                        <SaveIcon />
                    </IconButton>
                </Tooltip>
                <Divider className={styles.divider} orientation="vertical" flexItem />
                <Tooltip title="Cancel" placement="top">
                    <IconButton className={styles.iconButton} onClick={() => {handleIconButtonClick(null)}}>
                        <CancelIcon />
                    </IconButton>
                </Tooltip>
            </Paper>
        </Box>
    );
};