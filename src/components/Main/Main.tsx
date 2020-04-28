import React, {FC} from 'react';
import styles from './Main.module.css';
import Paper from '@material-ui/core/Paper';
import AddContainer from "./Add/AddContainer";
import ListContainer from "./List/ListContainer";
import Message from "./Message/Message";
import {IMainProps} from "./MainTypes";
import Paginator from "./Paginator/Paginator";

const Main: FC<IMainProps> = props => {
    return (
        <Paper className={styles.Paper} elevation={3}>
            <AddContainer tasks={props.tasks}/>
            <ListContainer
                setOpenMessage={props.setOpenMessage}
                tasks={props.tasks}
                pageNumber={props.pageNumber}
                pageSize={props.pageSize}
            />
            <Message
                openMessage={props.openMessage}
                setOpenMessage={props.setOpenMessage}
            />
            <Paginator
                tasks={props.tasks}
                paginatorChange={props.paginatorChange}
                pageSize={props.pageSize}
            />
        </Paper>
    );
};

export default Main;