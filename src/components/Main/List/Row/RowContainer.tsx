import React, {FC} from 'react';
import {IDeleteTasks, IRowContainerProps, ISetPerformed, ISetTag} from "./RowTypes";
import Row from "./Row";
import {deleteTaskActionCreator, setPerformedActionCreator, setTagActionCreator} from "../../../../store/actions";
import {useDispatch} from "react-redux";

const RowContainer: FC<IRowContainerProps> = props => {

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

export default RowContainer;