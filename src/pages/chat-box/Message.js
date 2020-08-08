import React from 'react';
import auth from '../../auth';


class Message extends React.Component {
  render() {
    let className = "bubble ";
    className += auth.email() === this.props.message.email ? "me" : "you";
    return(
      <div>
        <div className={className}>
          <p><small>{this.props.message.email}</small></p>
          {this.props.message.message}
        </div>
      </div>
    );
  }
}

export default Message;
