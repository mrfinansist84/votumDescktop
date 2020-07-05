import { createStyles, makeStyles } from '@material-ui/core/styles';

const DRAWER_WIDTH = 300;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding:0,
      minHeight: '100%'
    },
   
    appBar: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
    toolbarText: {
      justifyContent: 'space-between'
    }, 
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    label: {
      width: '100%',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    
    content: {
      flexGrow: 1,
      backgroundColor: '#f2f2f2',
      position: 'relative'
    },
    chip: {
      marginLeft: 15,
      paddingLeft: 5,
      paddingRight: 10,
      color: '#0076e4',
      backgroundColor: 'white'
    },
  }),
);

export default useStyles;
