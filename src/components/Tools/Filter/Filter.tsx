import React, {FC} from 'react';
import {Box} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import {IFilterProps} from "./FilterTypes";
import FilterListIcon from '@material-ui/icons/FilterList';
import useStyles from "./FilterStyles";

const Filter: FC<IFilterProps> = props => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Button onClick={props.handleButtonClick} startIcon={<FilterListIcon/>}>
                <Typography variant="body2">
                    Filter by: {props.filter}
                </Typography>
            </Button>
            <Menu
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.handleClose}
            >
                {props.options.map((option, index) =>
                    <MenuItem
                        key={option}
                        selected={index === props.options.indexOf(props.filter)}
                        onClick={(event) => props.handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                )}
            </Menu>
        </Box>
    );
};

export default Filter;