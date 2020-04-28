import React, {FC} from 'react';
import {Pagination} from "@material-ui/lab";
import {IPaginatorProps} from "./PaginatorTypes";
import {Box} from "@material-ui/core";
import styles from './Paginator.module.css';

const Paginator: FC<IPaginatorProps> = props => {

    const pagesCount = Math.ceil(props.tasks.length / props.pageSize);

    return (
        <Box className={styles.Paginator}>
            <Pagination count={pagesCount} onChange={props.paginatorChange} color="primary"/>
        </Box>
    );
};

export default Paginator;