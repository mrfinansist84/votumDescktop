import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Sidebar from '../Sidebar';
import useStyles from './styles';
import routes from '../../global/routes';
import { BLUE_FOR_CARD } from '../../global/pallete';
import BannerMessage from '../../components/BannerMessage';
import { closeBanner, closeModalWithDetail } from './actions';
import Loader from '../../components/Loader';
import DetailedInfoViewer from '../../components/DetailedInfoViewer';
import translater from '../../global/translation.json';

export const MainPage: React.FC = (props: any) => {
  const { location, documentsAmount, loading, modalDocument, closeModalWithDetail, isDetailsInPDF, message, closeBanner } = props;
  const classes = useStyles();
  const [routeIndex, sertRouteIndex] = useState(0);

  useEffect(() => {
    const index = routes.findIndex(
      (route) => route.route === location.pathname);

    sertRouteIndex(index >= 0 ? index : 0);
  }, [location.pathname]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          className={classes.toolbarText}
          style={{ backgroundColor: BLUE_FOR_CARD }}
        >
          <div className="voting-page-header-container">
            <h2 className="voting-page-header-title">{routes[routeIndex].title}</h2>
            {routes[routeIndex].isShowLabel && (<Chip
              color="primary"
              icon={routes[routeIndex].icon}
              label={`${routes[routeIndex].label} ${documentsAmount}`}
              className={classes.chip}
            />)}
          </div>
          <div>
            <Typography align="right" component={"p"} className={classes.label}>
              {`${translater.mainPage.flat} 10`}
          </Typography>
            <Typography align="right" component={"p"} className={classes.label}>
              Иванов Иван Иванович
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar classes={classes} routes={routes} />
      <main className={classes.content}>
        
        <div className={classes.toolbar} />
        {loading && <Loader />}
        {modalDocument && <DetailedInfoViewer 
        cardInfo={modalDocument} 
        closeModal={closeModalWithDetail} 
        isDetailsInPDF={isDetailsInPDF}/>
        }
        {message && <BannerMessage message={message} closeBanner={closeBanner}/>}
        <Switch>
          {routes.map((route, index) => (
            <Route exact path={route.route} component={route.component} key={index} />
          ))}
          <Redirect to="/voting" />
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  documentsAmount: state.mainPageReducer.documentsAmount,
  message: state.mainPageReducer.message,
  loading: state.mainPageReducer.loading,
  modalDocument: state.mainPageReducer.modalDocument,
  isDetailsInPDF: state.mainPageReducer.isDetailsInPDF,
});


const mapDispatchToProps = {
  closeBanner,
  closeModalWithDetail
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
