import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    buttonCreateProposals: {
      color: '#0076e4', 
      borderColor: '#0076e4', 
      marginTop: 10,
      marginRight: 20,
    },
    textFieldsCreateProposals:{
     backgroundColor: '#ffffff',
     margin: 0,
     marginBottom: 30
    },
    firstPart: {
      display: 'flex',
      width: '100%'
    },
    inputStyle: {
      marginBottom: 30,
    },
  }),
);

export default useStyles;
