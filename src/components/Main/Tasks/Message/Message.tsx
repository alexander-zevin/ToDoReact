import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {Box} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {IMessageProps} from "./MessageType";
import Slide from '@material-ui/core/Slide';

export const Message = (props: IMessageProps) => {
    return (
        <Box>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={props.openMessage}
                autoHideDuration={6000}
                onClose={() => {props.handleSnackbarClick(false)}}
                TransitionComponent={Slide}
            >
                <Alert
                    severity="success"
                    variant="filled"
                >Saving was successful!
                </Alert>
            </Snackbar>
        </Box>
    );
};