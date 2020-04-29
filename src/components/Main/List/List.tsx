import React, {FC} from 'react';
import {Box} from "@material-ui/core";
import {IListProps} from "./ListTypes";
import styles from './List.module.css'
import RowEditContainer from "./RowEdit/RowEditContainer";
import RowContainer from "./Row/RowContainer";

const List: FC<IListProps> = props => {
    return (
        <Box className={styles.List}>
            {props.tasks.length === 0 &&
                <Box className={styles.empty}><span>It's empty here...</span></Box>
            }
            {props.tasks.slice(props.leftPortionPageNumber, props.rightPortionPageNumber).map(item =>
                props.editModeIndex !== item.id ?
                    <RowContainer
                        id={item.id}
                        text={item.text}
                        isPerformed={item.isPerformed}
                        editModeIndex={props.editModeIndex}
                        setEditModeIndex={props.setEditModeIndex}
                        activeRowIndex={props.activeRowIndex}
                        setActiveRowIndex={props.setActiveRowIndex}
                        setOpenMessage={props.setOpenMessage}
                        isTagged={item.isTagged}
                        date={item.date}
                    />
                    :
                    <RowEditContainer
                        id={item.id}
                        text={item.text}
                        setEditModeIndex={props.setEditModeIndex}
                        setOpenMessage={props.setOpenMessage}
                    />
            )}
        </Box>
    );
};

export default List;