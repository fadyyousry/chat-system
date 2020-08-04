import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';

function ChatBox(props) {
  return (
    <div className="container">
      <div className="inbox_msg">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default ChatBox;
