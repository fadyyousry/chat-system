import React from 'react';
import MessagesList from './MessagesList';
import Typing from './Typing';

function Chat(props) {
  return (
    <div className="right">
      <div className="top"><span>To: <span className="name">{props.chat_name}</span></span></div>
        <MessagesList />
        <Typing />
    </div>
  );
}

export default Chat;
