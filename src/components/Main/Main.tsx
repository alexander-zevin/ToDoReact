import React, {FC} from 'react';
import Paper from '@material-ui/core/Paper';
import AddContainer from "./Add/AddContainer";
import ListContainer from "./List/ListContainer";
import Message from "./Message/Message";
import {IMainProps} from "./MainTypes";
import Paginator from "./Paginator/Paginator";
import useStyles from "./MainStyles";
import FilterContainer from "./Filter/FilterContainer";
import Preloader from "../Preloader/Preloader";

const Main: FC<IMainProps> = props => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
            <AddContainer tasks={props.listState.tasks}/>
            <FilterContainer filter={props.listState.filter}/>
            <ListContainer
                setOpenMessage={props.setOpenMessage}
                tasks={props.listState.tasks}
                pageNumber={props.pageNumber}
                pageSize={props.pageSize}
                filter={props.listState.filter}
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

export default Main;