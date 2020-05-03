import React, {FC} from 'react';
import Paper from '@material-ui/core/Paper';
import AddContainer from "./Add/AddContainer";
import ListContainer from "./List/ListContainer";
import Message from "./Message/Message";
import {IMainProps} from "./MainTypes";
import Paginator from "./Paginator/Paginator";
import useStyles from "./MainStyles";
import ControlContainer from "./Control/ControlContainer";

const Main: FC<IMainProps> = props => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
            <AddContainer tasks={props.state.tasks}/>
            <ControlContainer filter={props.state.filter}/>
            <ListContainer
                setOpenMessage={props.setOpenMessage}
                tasks={props.state.tasks}
                pageNumber={props.pageNumber}
                pageSize={props.pageSize}
                filter={props.state.filter}
            />
            <Message
                openMessage={props.openMessage}
                setOpenMessage={props.setOpenMessage}
            />
            <Paginator
                tasks={props.state.tasks}
                paginatorChange={props.paginatorChange}
                pageSize={props.pageSize}
            />
        </Paper>
    );
};

export default Main;