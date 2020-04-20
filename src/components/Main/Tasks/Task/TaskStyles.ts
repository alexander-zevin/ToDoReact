import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/styles";

type TProps = {
    textDecoration: string;
};

export const useTaskStyles = makeStyles(() => createStyles({
    root: (props: TProps) => ({textDecoration: props.textDecoration})
}));