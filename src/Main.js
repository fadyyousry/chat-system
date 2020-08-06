import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChatBox from './pages/chat-box/ChatBox';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import RoomsIndex from './pages/rooms/RoomsIndex'
import App from './App'
import { loggedIn } from './helper';

const DecisionRoute = ({ trueComponent, falseComponent, decisionFunc}) => {
  return (
    <Route
      component={
        decisionFunc()
          ? trueComponent
          : falseComponent
      }
    />
  )
}

const Main = () => {
  return (
    <Switch>
      <DecisionRoute path="/signup" exact={true}
            trueComponent={App}
            falseComponent={SignUp}
            decisionFunc={loggedIn}
          />
      <DecisionRoute path="/login" exact={true}
            trueComponent={App}
            falseComponent={SignIn}
            decisionFunc={loggedIn}
          />
      <DecisionRoute path="/rooms" exact={true}
            trueComponent={RoomsIndex}
            falseComponent={SignIn}
            decisionFunc={loggedIn}
          />
      <DecisionRoute path="/chats" exact={true}
            trueComponent={ChatBox}
            falseComponent={SignIn}
            decisionFunc={loggedIn}
          />
      <DecisionRoute path="/" exact={true}
            trueComponent={ChatBox}
            falseComponent={SignIn}
            decisionFunc={loggedIn}
          />
      <Route path='*' exact={true}
       component={() => (<div className="hit-the-floor">404</div>)}
        />
    </Switch>
  );
}

export default Main;
