import './App.css'
import React from 'react';
<<<<<<< HEAD
import { Switch, Route, Redirect } from 'react-router-dom';
=======
import { Switch, Route, Redirect, Link } from 'react-router-dom';
>>>>>>> 42de6f6479a522d9f9178f82eed5ab8b10de0613
import ChatBox from './pages/chat-box/ChatBox';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import RoomsIndex from './pages/rooms/RoomsIndex';
import auth from './auth';


class App extends React.Component {
  render(){
    return (
      <div className="container mt-5">
        <Switch>
          <ProtectedRoute path='/login' exact component={SignIn} />
          <ProtectedRoute path='/register' exact component={SignUp} />
          <PrivateRoute  path='/rooms' exact component={RoomsIndex} />
          <PrivateRoute  path='/chats' exact component={ChatBox} />
          <Route path='*'>
            <Redirect to='/chats' />
          </Route>
        </Switch>
      </div>
    );
  }
}

function ProtectedRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => auth.isAuth() === false
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => auth.isAuth() === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default App;
