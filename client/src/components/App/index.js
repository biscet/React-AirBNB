import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import './App.scss';

import ChatContainer from '../ChatContainer';
import Register from '../Register';
import Login from '../Login';

class App extends Component {
  state = {
    isLogedIn: false,
    user: {}
  }

  componentDidMount() {
    const id = localStorage.getItem('id');
    this.setState({
      user: { ...this.state.user, id }
    })
  }

  signIn = user => {
    this.setState({
      isLogedIn: true,
      user
    })
  }

  signOut = () => {
    this.setState({
      isLogedIn: false
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
        <Switch>
            <PrivateRoute exact path="/" isAuth={ this.state.isLogedIn } />           
            <Route path="/chat" render={props => <ChatContainer {...props} user={ this.state.user } />} />
            <Route path="/login" render={props => <Login signIn={this.signIn} isAuth={this.state.isLogedIn} {...props} />} />
            <Route path="/register" render={props => <Register signIn={this.signIn} {...props} />} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component,  isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => isAuth ? (
            <Redirect
            to={{
              pathname: "/chat"
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
        
      }
    />
  );
}

export default App;