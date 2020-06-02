import React, {FC} from 'react';
import {Box} from "@material-ui/core";
import {IListProps} from "./ListTypes";
import {RowEditContainer} from "./RowEdit/RowEditContainer";
import {RowContainer} from "./Row/RowContainer";
import useStyles from "./ListStyles";

export const List: FC<IListProps> = props => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {
                props.initialized &&
                    props.tasks.length === 0 &&
                        <Box className={classes.empty}><span>It's empty here...</span></Box>
            }
            {props.tasks.slice(props.leftPortionPageNumber, props.rightPortionPageNumber).map((item: any, index: number) =>
                props.editModeIndex !== item.id ?
                    <RowContainer
                        id={item.id}
                        text={item.text}
                        isPerformed={item.isPerformed}
                        editModeIndex={props.editModeIndex}
                        setEditModeIndex={props.setEditModeIndex}
                        activeRowIndex={props.activeRowIndex}
                        setActiveRow={props.setActiveRow}
                        setOpenMessage={props.setOpenMessage}
                        isTagged={item.isTagged}
                        date={props.convertDate(item.date)}
                        key={item.id}
                    />
                    :
                    <RowEditContainer
                        id={item.id}
                        text={item.text}
                        setEditModeIndex={props.setEditModeIndex}
                        setOpenMessage={props.setOpenMessage}
                        key={item.id}
                        setActiveRow={props.setActiveRow}
                    />
            )}
        </Box>
    );
};