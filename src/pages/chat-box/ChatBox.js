import React from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Chat from './Chat';
import RoomsList from './RoomsList';
import { url, loggedIn } from '../../helper';


function ChatBox(props) {
  return (
      <div className="row">
        <div className="col-10 offset-1 chatbox">
          <RoomsList />
          <Chat />
        </div>
      </div>
  );
}

export default ChatBox;
