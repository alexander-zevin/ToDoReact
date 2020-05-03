import React, {FC} from 'react';
import {TextField, Button, Box} from "@material-ui/core";
import {IAddProps} from "./AddTypes";
import useStyles from "./AddStyles";

const Add: FC<IAddProps> = ({textFieldValue, textFieldChange, addTask}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TextField
                label='Add task text'
                fullWidth
                size='small'
                value={textFieldValue}
                onChange={(event) => {textFieldChange(event.target.value)}}
                variant="outlined"
                onKeyUp={event => {event.keyCode === 13 && addTask(textFieldValue)}}
            />
            <Box ml={2}>
                <Button
                    className={classes.btn}
                    onClick={() => {addTask(textFieldValue)}}
                    variant="contained"
                    color="primary">ADD
                </Button>
            </Box>
        </Box>
    );
};

export default Add;