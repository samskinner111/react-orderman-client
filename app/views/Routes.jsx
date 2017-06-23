import React, { Component } from 'react';
import createHashHistory from 'history/createHashHistory';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import SuccessButton from './common/buttons/SuccessButton';
import Logo from './common/logos/Logo';

const history = createHashHistory();

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/success" component={SuccessButton} />
          <Route path="/" component={Logo} />
        </Switch>
      </Router>
    );
  }
}
