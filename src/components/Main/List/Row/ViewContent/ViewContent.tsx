import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Tooltip} from "@material-ui/core";
import {IViewContentProps} from "./ViewContentTypes";
import styles from './ViewContent.module.css'

function PaperComponent(props: PaperProps) {
    return (
        <Draggable handle="#draggable-dialog-title">
            <Paper {...props} />
        </Draggable>
    );
}

const ViewContent: FC<IViewContentProps> = props => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.setActiveRowIndex(null);
    };

    return (
        <div >
            <Tooltip title='View content' placement="top">
                <IconButton onClick={handleClickOpen}>
                    <VisibilityIcon />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    View content
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className={styles.ViewContent}>
                        {props.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ViewContent;