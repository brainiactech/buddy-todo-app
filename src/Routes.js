import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PageNotFound} from './views';
import DashboardContainer from './layouts/AdminUserDashboardContainer';
import {
  HomePage
} from './views';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/" render={(props) => <DashboardContainer {...props}  />} />
        <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
