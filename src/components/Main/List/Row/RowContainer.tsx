import React, {FC} from 'react';
import {IDeleteTasks, IRowContainerProps, ISetPerformed, ISetTag} from "./RowTypes";
import {Row} from "./Row";
import {useDispatch} from "react-redux";
import {
    deleteTaskActionCreator,
    setPerformedActionCreator,
    setTagActionCreator
} from "../../../../store/list/actions";

export const RowContainer: FC<IRowContainerProps> = props => {

    const dispatch = useDispatch();

    const setPerformed: ISetPerformed = id => {
        dispatch(setPerformedActionCreator(id))
    };

    const deleteTasks: IDeleteTasks = id => {
        dispatch(deleteTaskActionCreator(id));
        props.setOpenMessage({open: true, message: 'Uninstall was successful'});
    };

    const setTag: ISetTag = id => {
        dispatch(setTagActionCreator(id));
    };

    return (
        <Row
            setPerformed={setPerformed}
            deleteTasks={deleteTasks}
            setTag={setTag}
            {...props}
        />
    );
};