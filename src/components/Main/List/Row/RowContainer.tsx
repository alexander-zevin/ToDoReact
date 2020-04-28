import React, {FC} from 'react';
import {IDeleteTasks, IRowContainerProps, ISetPerformed} from "./RowTypes";
import Row from "./Row";
import {deleteTaskActionCreator, setPerformedActionCreator} from "../../../../store/actions";
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

    return (
        <Row
            setPerformed={setPerformed}
            deleteTasks={deleteTasks}
            {...props}
        />
    );
};

export default RowContainer;