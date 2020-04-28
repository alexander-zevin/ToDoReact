import React, {useState} from 'react';
import {IMessage, IPaginatorChange} from "./MainTypes";
import {shallowEqual, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import Main from "./Main";

const MainContainer = () => {

    const {tasks} = useSelector((state: RootStateType) => state.toDo, shallowEqual);

    const [openMessage, setOpenMessage] = useState<IMessage>({open: false, message: null});

    const pageSize = 11;
    const [pageNumber, setPageNumber] = useState(1);
    const paginatorChange: IPaginatorChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <Main
            tasks={tasks}
            openMessage={openMessage}
            setOpenMessage={setOpenMessage}
            pageSize={pageSize}
            pageNumber={pageNumber}
            paginatorChange={paginatorChange}
        />
    );
};

export default MainContainer;