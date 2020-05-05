import React, {FC} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {IMessageProps} from "./MessageTypes";
import {Slide, SlideProps} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
}

const Message: FC<IMessageProps> = props => {
    return (
        <Hidden mdDown>
            <Snackbar
                open={props.openMessage.open}
                onClose={() => {props.setOpenMessage({open: false, message: null})}}
                autoHideDuration={4000}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                TransitionComponent={TransitionRight}
            >
                <Alert
                    onClose={() => {props.setOpenMessage({open: false, message: null})}}
                    severity="success"
                    variant="filled"
                >
                    {props.openMessage.message}
                </Alert>
            </Snackbar>
        </Hidden>
    );
};

export default Message;