import React, {FC} from 'react';
import Paper from '@material-ui/core/Paper';
import {AddContainer} from "./Add/AddContainer";
import {ListContainer} from "./List/ListContainer";
import {Message} from "./Message/Message";
import {IMainProps} from "./MainTypes";
import {Paginator} from "./Paginator/Paginator";
import {useStyles} from "./MainStyles";
import {Preloader} from "./Preloader/Preloader";
import {Tools} from "./Tools/Tools";

export const Main: FC<IMainProps> = props => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
            <AddContainer tasks={props.listState.tasks}/>
            <Tools
                filter={props.listState.filter}
                sortBy={props.listState.sortBy}
            />
            <ListContainer
                setOpenMessage={props.setOpenMessage}
                tasks={props.listState.tasks}
                pageNumber={props.pageNumber}
                pageSize={props.pageSize}
                filter={props.listState.filter}
                sortBy={props.listState.sortBy}
                initialized={props.initialized}
            />
            <Message
                openMessage={props.openMessage}
                setOpenMessage={props.setOpenMessage}
            />
            <Paginator
                tasks={props.listState.tasks}
                paginatorChange={props.paginatorChange}
                pageSize={props.pageSize}
            />
            <Preloader initialized={props.initialized}/>
        </Paper>
    );
};