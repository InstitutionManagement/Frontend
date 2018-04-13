import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login.jsx';
import Private from '../Private/Private.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Private} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return { alert };
};

export default connect(mapStateToProps)(App);
