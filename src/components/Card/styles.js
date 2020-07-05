import {
  makeStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    borderLeftWidth: 10,
    borderLeftStyle: "solid",
    marginRight: 20,
    marginBottom: 20,
  },
  cardHeaderContent: {
    paddingBottom: 0,
  },
  cardHeaderTitle: {
    fontSize: 20,
    paddingBottom: 5,
  },
  cardContentWrapper: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  cardContentList: {
    fontWeight: 700,
    marginBottom: 10,
  },
  cardAfterVoiteText: {
    fontWeight: 700,
   marginBottom: 0
  },
  cardContentInnerText: {
    marginLeft: 10
  },
  voteBox: {
    paddingLeft: 20,
    height: 70,
    display: "flex",
    alignItems: "flex-end",
  },
  cardActionsWrapper: {
    alignItems: "flex-end",
  },
  cardContentButton: {
    marginRight: 10,
  }
}));