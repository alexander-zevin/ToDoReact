import { makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
    textDecoration: string
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        padding: '8px 0',
        boxSizing: 'border-box',
        borderBottom: '1px solid #eeeeee',
        '&:hover': {
            borderBottom: '1px solid transparent',
            boxShadow: '0 2px 5px #757575'
        }
    },
    star: {
        position: 'relative',
        right: '12px'
    },
    text: {
        position: 'relative',
        right: '12px',
        whiteSpace: 'nowrap',
        flexGrow: 1,
        textDecoration: (stylesProps: IStylesProps): string => stylesProps.textDecoration
    },
    date: {
        minWidth: '50px',
        margin: '0 8px'
    }
});

export default useStyles;