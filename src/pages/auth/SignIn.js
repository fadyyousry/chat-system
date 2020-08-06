import React from 'react';
import './style.scss';
import { url } from '../../helper';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    fetch(url + '/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then((result) => {
        localStorage.setItem('login', JSON.stringify({
          login: true,
          token: result.auth_token,
          current_user_id: result.current_user_id
        }))
        this.setState({loggedIn: true});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {
          <form className="form" method="post" onSubmit={this.handleSubmit}>
            <h2 className="form-heading">Please login</h2>
            <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autoFocus=""
            value={this.state.email} onChange={this.handleChange} />
            <input type="password" className="form-control" name="password" placeholder="Password" required=""
            value={this.state.password} onChange={this.handleChange} />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        }
      </div>
    );
  }
}

export default SignIn;
