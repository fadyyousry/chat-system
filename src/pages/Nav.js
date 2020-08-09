import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../auth';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    auth.logout(
      () => {
        localStorage.removeItem('login');
        this.props.history.push('/login');
      }
    );
  }

  render() {
    return (
      <nav>{auth.isAuth() ?
        <div><div className="btn-group mb-3" role="group" aria-label="Basic example">
          <Link to="/chats" className="btn btn-info" >Home</Link>
          <Link to="/rooms" className="btn btn-info" >Rooms</Link>
          <button className="btn btn-danger" type="button" onClick={this.handleLogout} >
            Leave
          </button>
        </div>
        <small className="user bg-secondary float-right">{auth.email()} </small></div>
         :
         <div>
          <Link to="/register" className="btn btn-primary mb-3 col-2" >Sign Up</Link>
          <Link to="/login" className="btn btn-primary mb-3 col-2" >Login</Link>
        </div>
      }</nav>
    );
  }
}

export default withRouter(Nav);
