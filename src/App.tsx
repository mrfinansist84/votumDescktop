import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {MainPage} from './containers/MainPage';
import './index.scss';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
