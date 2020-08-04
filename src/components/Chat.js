import React from 'react';
import MessagesList from './MessagesList';
import Typing from './Typing';

function Chat(props) {
  return (
    <div className="mesgs">
      <MessagesList />
      <Typing />
    </div>
  );
}

export default Chat;
