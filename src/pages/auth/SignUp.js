import './style.scss';
import React from 'react';
import Nav from '../Nav';
import { url } from '../../helper';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      errorMassage: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    let user = this.state.user
    const value = target.value;
    const name = target.name;
    user[name] = value;
    this.setState({
      user: user
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      user: this.state.user
    };

    fetch(url + '/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
    }).then((response) => {
      if (response.status === 422) {
        this.setState({errorMassage: "Email has been already taken"})
      }
      else if (!response.ok) {
        throw Error(response.statusText);
      }
      else {
        this.props.history.push('/login');
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
            <h2 className="form-heading">Sign Up</h2>
            <span className="error-massage">{this.state.errorMassage}</span>
            <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autoFocus=""
            value={this.state.user.email} onChange={this.handleChange} />
            <input type="password" className="form-control" name="password" placeholder="Password" required=""
            value={this.state.user.password} onChange={this.handleChange}/>
            <input type="password" className="form-control" name="password_confirmation" placeholder="Confirm Password" required=""
            value={this.state.user.password_confirmation} onChange={this.handleChange}/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
          </form>
        }
      </div>
    );
  }
}

export default SignUp;
