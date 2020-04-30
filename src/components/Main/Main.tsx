import React, {FC} from 'react';
import styles from './Main.module.css';
import Paper from '@material-ui/core/Paper';
import AddContainer from "./Add/AddContainer";
import ListContainer from "./List/ListContainer";
import Message from "./Message/Message";
import {IMainProps} from "./MainTypes";
import Paginator from "./Paginator/Paginator";
import Control from "./Control/Control";

const Main: FC<IMainProps> = props => {
    return (
        <Paper className={styles.Paper} elevation={3}>
            <AddContainer tasks={props.state.tasks}/>
            <Control sortBy={props.state.sortBy}/>
            <ListContainer
                setOpenMessage={props.setOpenMessage}
                tasks={props.state.tasks}
                pageNumber={props.pageNumber}
                pageSize={props.pageSize}
                sortBy={props.state.sortBy}
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