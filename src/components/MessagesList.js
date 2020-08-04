import React from 'react';
import {OutgoingMessage, IncomingMessage} from './Message';

class MessagesList extends React.Component {
  render() {
    return (
      <div className="msg_history">
        <IncomingMessage />
        <OutgoingMessage />
      </div>
    );
  }
}

export default MessagesList;
