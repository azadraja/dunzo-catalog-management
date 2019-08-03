import React from 'react';
import './App.css';
import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';
import { Router, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import { PrivateRoute } from './components/PrivateRoute';
import { LoginPage } from './containers/LoginPage/LoginPage';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

render() {
  return (
    <Router history={history}>
        <div>
            <PrivateRoute exact path="/" component={MainContainer} />
            <Route path="/login" component={LoginPage} />
        </div>
    </Router>
  );
}

}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
