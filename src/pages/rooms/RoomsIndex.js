import './style.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';
import Room from './Room';
import { url, jwt } from '../../helper';

class RoomsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      roomName: ''
    }

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
  }

  componentDidMount() {
    fetch(url + '/chats', {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + jwt(),
      },
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then((result) => {
        this.setState({rooms: result});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  handleRoomNameChange(event) {
    this.setState({roomName: event.target.value});
  }

  handleCreateRoom() {
    const body = {chat: {name: this.state.roomName}}
    fetch(url + '/chats', {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + jwt(),
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then(result => {
        let rooms = this.state.rooms.slice();
        rooms.push(result);
        this.setState({rooms: rooms});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  render(){
    const rooms = this.state.rooms;
    return(
      <div>
        <button className="btn btn-lg btn-primary" onClick={this.handleCreateRoom}>
          <FontAwesomeIcon icon={faPlus} /> Create a new room
        </button>
        <input type="text" className="text-field" name="roomname" placeholder="Room Name"
        value={this.state.roomName} onChange={this.handleRoomNameChange} />
        <ul className="row mt-5">
            {rooms.map(room => (
              <li className="col-3 mb-4" key={room.id}><Room room={room} /></li>
            ))}
        </ul>
      </div>
    );
  }
}

export default RoomsIndex;
