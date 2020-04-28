import React, {FC} from 'react';
import styles from './Row.module.css';
import {Box, Checkbox, IconButton, Divider, Tooltip} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {IRowProps} from "./RowTypes";

const Row: FC<IRowProps> = props => {
    return (
        <Box
            className={styles.Item}
            onMouseMove={() => {props.setActiveRowIndex(props.id)}}
            onMouseLeave={() => {props.setActiveRowIndex(null)}}
            title={props.text}
        >
            <Tooltip title={props.isPerformed ? 'Performed' : 'Not performed'} placement="top">
                <Checkbox color='primary' checked={props.isPerformed} onChange={() => {props.setPerformed(props.id)}}/>
            </Tooltip>
            <Box
                component='div'
                flexGrow={1}
                style={{textDecoration: props.isPerformed ? 'line-through' : 'none'}}
                textOverflow="ellipsis"
                overflow="hidden"
            >
                {props.text}
            </Box>
            {props.activeRowIndex === props.id &&
                <>
                    <Tooltip title="Edit" placement="top">
                        <IconButton onClick={() => {props.setEditModeIndex(props.id)}}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider orientation="vertical" flexItem/>
                    <Tooltip title="Delete" placement="top">
                        <IconButton onClick={() => {props.deleteTasks(props.id)}}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </>
            }
        </Box>
    );
};

export default Row;