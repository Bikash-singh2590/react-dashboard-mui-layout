import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import login from '../src/components/login/login'
import Layout from './container/Layout/Layout';
import dashboard from  './container/Dashboard/Dashboard'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
        <Route path="/" exact component={login} />
          <Route path="/login" exact component={login} />
          <Layout>
            <Route path="/Dashboard" component={dashboard}  />
            <Route path="/Charts" />
            <Route path="/About" />
          </Layout>

        </Switch>
      </React.Fragment>
    );
  }
}

export default App;