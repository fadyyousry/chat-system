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
        <div>
          <Link to="/chats" className="btn btn-info mb-5 col-2" >Home</Link>
          <Link to="/rooms" className="btn btn-info mb-5 col-2" >Rooms</Link>
          <span className="mb-3 col-3 float-right text-center">
            <div><small className="user bg-info w-100">{auth.email()} </small></div>
            <button className="btn btn-danger " type="button" onClick={this.handleLogout} >
              Leave
            </button>
          </span>
        </div>
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
