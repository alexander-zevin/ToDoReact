import React, {FC} from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from './Add.module.scss'
import {IAddPropsType} from "./AddTypes";

export const Add: FC<IAddPropsType> = ({setInputText, inputValue, addTask}) => {
    return (
        <Box className={styles.rootBox}>
            <Box className={styles.textFieldBox} mr={2}>
                <TextField
                    label="Enter task text"
                    fullWidth
                    value={inputValue}
                    onChange={e => setInputText(e.target.value)}
                />
            </Box>
            <Box>
                <Button
                    className={styles.btn}
                    variant="contained"
                    color="primary"
                    onClick={() => { addTask(inputValue) }}
                >Add
                </Button>
            </Box>
        </Box>
    )
};