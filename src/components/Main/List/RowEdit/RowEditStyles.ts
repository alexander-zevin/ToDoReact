import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        padding: `8px 0`,
        boxSizing: 'border-box',
        borderBottom: '1px solid transparent',
        boxShadow: '0 2px 5px #757575'
    }
});

export default useStyles;