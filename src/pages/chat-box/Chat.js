import React from 'react';
import MessagesList from './MessagesList';
import Typing from './Typing';

class Chat extends React.Component {
  render() {
    let name = '';
    if (this.props.room) name = this.props.room.name;
    return (
      <div className="right">
        <div className="top"><span>To: <span className="name">{name}</span></span></div>
        <MessagesList chat={this.props.room}/>
        <Typing chat={this.props.room}/>
      </div>
    );
  }
}

export default Chat;
