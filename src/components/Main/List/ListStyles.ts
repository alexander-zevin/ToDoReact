import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid #e0e0e0',
        flexGrow: 1,
        overflow: 'auto'
    },
    empty: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& span': {
            padding: '16px',
            backgroundColor: '#fafafa',
            borderRadius: '5px',
            border: '1px solid #e0e0e0'
        }
    },
});

export default useStyles;