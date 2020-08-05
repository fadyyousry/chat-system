import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChatBox from './pages/chat-box/ChatBox';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import RoomsIndex from './pages/rooms/RoomsIndex'

function loggedIn() {
  if (localStorage.getItem("login") === null) return false;
  return JSON.parse(localStorage.getItem('login')).login;
}

const Main = () => {
  return (
    <Switch>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/login' component={SignIn}></Route>
      <Route exact path='/rooms' component={RoomsIndex}></Route>
      <Route exact path='/chats' component={ChatBox}></Route>
      <Route exact path="/">
      {loggedIn() ? <Redirect to="/rooms" /> : <Redirect to="/login" /> }
      </Route>
      <Route path='*' exact={true} component={() => (<div className="hit-the-floor">404</div>)} />
    </Switch>
  );
}

export default Main;
