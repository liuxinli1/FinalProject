import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Navbar from './components/navbar/Navbar.js';
import HomeScreen from './components/home_screen/HomeScreen.js';
import RegisterScreen from './components/register_screen/RegisterScreen.js';
import LoginScreen from './components/login_screen/LoginScreen.js';
import DatabaseTester from './test/DatabaseTester.js';
import EditScreen from './components/edit_screen/EditScreen.js';

class App extends Component {
  
  render (){
    const { auth } = this.props;
    if (auth.isLoaded) {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/register" component={RegisterScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/database" component={DatabaseTester} />
              <Route exact path="/item/:id" component={EditScreen} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
    return null;
  } 
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App);