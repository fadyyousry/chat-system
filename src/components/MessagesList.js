import React from 'react';
import Message from './Message';

class MessagesList extends React.Component {
  render() {
    return (
      <div className="chat">
        <div className="conversation-start"></div>
        <Message />
      </div>
    );
  }
}

export default MessagesList;
