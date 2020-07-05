import {
  makeStyles
} from '@material-ui/core/styles';
import {BLUE_FOR_CARD} from '../../global/pallete';

export const useStyles = makeStyles((theme) => ({
  buttonFilter: {
    color: BLUE_FOR_CARD, 
    borderColor: BLUE_FOR_CARD, 
    marginTop: 10,
    marginRight: 20
  },
  paperWrapper:{}
}));