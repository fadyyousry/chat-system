import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import React from 'react';
import Chat from './Chat';
import RoomsList from './RoomsList';
import Nav from '../Nav';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_room: {
        name: ""
      },
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(room) {
    this.setState({current_room: room});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-10 offset-1 chatbox">
            <RoomsList onChangeRoom={this.handleChange}/>
            <Chat room={this.state.current_room}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
