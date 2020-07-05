import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonCreateProposals: {
      color: '#0076e4', 
      borderColor: '#0076e4', 
      marginTop: 10,
      marginRight: 20
    },
    textFieldsCreateProposals:{
     backgroundColor: '#ffffff'
    }
  }),
);

export default useStyles;
