import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {
    IFilterContainerProps,
    IHandleButtonClick,
    IHandleClose,
    IHandleMenuItemClick
} from "./FilterTypes";
import Filter from "./Filter";
import {setFilterActionCreator} from "../../../store/list/listActions";

const options: Array<string> = [
    'all',
    'not performed',
    'tags',
];

const FilterContainer: FC<IFilterContainerProps> = ({filter}) => {

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleButtonClick: IHandleButtonClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick: IHandleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        dispatch(setFilterActionCreator(options[index]));
    };

    const handleClose: IHandleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Filter
            filter={filter}
            anchorEl={anchorEl}
            handleButtonClick={handleButtonClick}
            handleMenuItemClick={handleMenuItemClick}
            handleClose={handleClose}
            options={options}
        />
    )
};

export default FilterContainer;