import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import { loggedIn } from './helper';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: loggedIn()
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLoggedIn = this.handleLoggedIn.bind(this);

  }

  handleLogout() {
    localStorage.removeItem('login');
    this.setState({loggedIn: false});
  }

  handleLoggedIn(e) {
    this.setState({loggedIn: true});
  }

  render(){
    let nav =
    <div>
      <Link to="/chats" className="btn btn-info mb-3 col-2" >Home</Link>
      <Link to="/rooms" className="btn btn-info mb-3 col-2" >Rooms</Link>
      {this.state.loggedIn?
        <button className="btn btn-danger mb-3 col-2 offset-6" type="button"
       onClick={this.handleLogout} >Logout</button>
       :
      <Link to="/signup" className="btn btn-primary mb-3 col-2 offset-6" >Sign Up</Link>}
    </div>
    return (
      <div className="container mt-5">
        {nav}
        <Main />
      </div>
    );
  }
}

export default App;
