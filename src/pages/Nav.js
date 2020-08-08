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
      <div>{auth.isAuth() ?
        <div>
          <Link to="/chats" className="btn btn-info mb-3 col-2" >Home</Link>
          <Link to="/rooms" className="btn btn-info mb-3 col-2" >Rooms</Link>
          <button className="btn btn-danger mb-3 col-2 offset-6" type="button" onClick={this.handleLogout} >
            <small className="user">{auth.email()} </small>
            Logout
          </button>
        </div>
         :
         <div>
          <Link to="/register" className="btn btn-primary mb-3 col-2" >Sign Up</Link>
          <Link to="/login" className="btn btn-primary mb-3 col-2" >Login</Link>
        </div>
      }</div>
    );
  }
}

export default withRouter(Nav);
