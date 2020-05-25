import React, {FC} from 'react';
import {Box} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import {ISortProps} from "./SortTypes";
import SortIcon from '@material-ui/icons/Sort';
import useStyles from "./SortStyles";

const Sort: FC<ISortProps> = props => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Button onClick={props.handleButtonClick} startIcon={<SortIcon/>}>
                <Typography variant="body2">
                    Sort by: {props.sortBy}
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
                        selected={index === props.options.indexOf(props.sortBy)}
                        onClick={(event) => props.handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                )}
            </Menu>
        </Box>
    );
};

export default Sort;