import React from 'react';
import auth from '../../auth';


class Message extends React.Component {
  render() {
    let className = "bubble ";
    className += auth.userId() === this.props.message.user_id ? "me" : "you";
    return(
      <div className={className}>
        {this.props.message.message}
      </div>
    );
  }
}

export default Message;
