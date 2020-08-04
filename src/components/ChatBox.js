import React from 'react';
import RoomsList from './RoomsList';
import Chat from './Chat';

function ChatBox(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <RoomsList />
        <Chat />
      </div>
    </div>
  );
}

export default ChatBox;
