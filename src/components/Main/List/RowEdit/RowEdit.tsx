import React, {FC} from 'react';
import {Box, IconButton, Divider, Tooltip, InputBase} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import {IRowEditProps} from "./RowEditTypes";
import useStyles from "./RowEditStyles";

export const RowEdit: FC<IRowEditProps> = props => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box flexGrow={1} pl={2}>
                <InputBase
                    placeholder='Change the task text'
                    autoFocus
                    value={props.inputValue}
                    onChange={e => {props.setInputValue(e.target.value)}}
                    onKeyUp={event => {event.keyCode === 13 && props.saveTask(props.id, props.inputValue)}}
                    fullWidth
                />
            </Box>
            <Tooltip title="Save" placement="top">
                <IconButton onClick={() => {props.saveTask(props.id, props.inputValue)}}>
                    <SaveIcon />
                </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem/>
            <Tooltip title="Cancel" placement="top">
                <IconButton onClick={() => {props.setEditModeIndex(null)}}>
                    <CancelIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};