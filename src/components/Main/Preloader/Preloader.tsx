import React, {FC} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from "./PreloaderStyles";
import {IPreloaderProps} from "./PreloaderTypes";

export const Preloader: FC<IPreloaderProps> = ({initialized}) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={!initialized}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

