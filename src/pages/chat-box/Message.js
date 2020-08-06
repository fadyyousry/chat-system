import React from 'react';
import { userId } from '../../helper';

class Message extends React.Component {
  render() {
    let className = "bubble ";
    className += userId() === this.props.message.user_id ? "me" : "you";
    return(
      <div className={className}>
        {this.props.message.message}
      </div>
    );
  }
}

export default Message;
