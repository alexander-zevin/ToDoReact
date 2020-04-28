import React, {FC} from 'react';
import {TextField, Button, Box} from "@material-ui/core";
import {IAddProps} from "./AddTypes";
import styles from './Add.module.css'

const Add: FC<IAddProps> = ({textFieldValue, textFieldChange, addTask}) => {

    return (
        <Box className={styles.Add}>
            <TextField
                label='Add task text'
                fullWidth
                size='small'
                value={textFieldValue}
                onChange={(event) => {textFieldChange(event.target.value)}}
                variant="outlined"
                onKeyUp={event=> {event.keyCode === 13 && addTask(textFieldValue)}}
            />
            <Box ml={2}>
                <Button
                    className={styles.btn}
                    onClick={() => {addTask(textFieldValue)}}
                    variant="contained"
                    color="primary">ADD
                </Button>
            </Box>
        </Box>
    );
};

export default Add;