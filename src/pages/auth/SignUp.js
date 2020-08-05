import React from 'react';
import './style.scss';

class SignUp extends React.Component {
  render() {
    return (
      <form className="form">
        <h2 className="form-heading">Sign Up</h2>
        <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autoFocus="" />
        <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
        <input type="password" className="form-control" name="confirm password" placeholder="Confirm Password" required=""/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignUp;
