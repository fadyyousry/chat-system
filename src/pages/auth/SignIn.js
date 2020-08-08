import './style.scss';
import React from 'react';
import Nav from '../Nav';
import auth from '../../auth';
import { url } from '../../helper';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMassage: ''
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
    event.preventDefault();

    const body = {
      email: this.state.email,
      password: this.state.password
    };

    fetch(url + '/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
    }).then((response) => {
      if (response.status === 401) {
        this.setState({errorMassage: "Wrong email or password"})
      }
      else if (!response.ok) {
        throw Error(response.statusText);
      }
      else {
        response.json().then((result) => {
          auth.login(
            () => {
              localStorage.setItem('login', JSON.stringify({
                login: true,
                token: result.auth_token,
                email: this.state.email
              }));
              this.props.history.push('/chats');
            }
          );
        })
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  render() {
    return (
      <div>
        <Nav />
        {
          <form className="form" method="post" onSubmit={this.handleSubmit}>
            <h2 className="form-heading">Please login</h2>
            <span className="error-massage">{this.state.errorMassage}</span>
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
