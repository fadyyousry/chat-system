import React from 'react';
import './style.css';
import { url } from '../../helper';
import auth from '../../auth';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room:{
        name: '',
        description: ''
      },
      errorMassage: ''
    }

    this.handleNewRoomChange = this.handleNewRoomChange.bind(this);
    this.handleCreateRoom = this.handleCreateRoom.bind(this);
  }

  handleNewRoomChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let room = this.state.room
    room[name] = value;
    this.setState({
      newRoom: room
    });
  }

  handleCreateRoom(event) {
    const body = {chat: this.state.room}
    fetch(url + '/chats', {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + auth.jwt(),
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(body)
    })
    .then(response => {
      if (response.status === 422) {
        this.setState({errorMassage: "Name has been already taken"})
      }
      else if (!response.ok) {
        throw Error(response.statusText);
      }
      else {
        response.json().then(result => {
          this.props.handleCreateRoom(result);
          this.props.closePopup();
        })
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  render() {
    return (
      <div className='popup'>
        <div className="form popup_inner">
            <button className="close" onClick={this.props.closePopup}>X</button>
            <h2 className="form-heading">Create Room</h2>
            <span className="error-massage">{this.state.errorMassage}</span>
            <input type="text" className="form-control" placeholder="name"
            value={this.state.room.name} name="name" onChange={this.handleNewRoomChange} />
            <textarea className="form-control" placeholder="description"
            value={this.state.room.description} name="description" onChange={this.handleNewRoomChange} />
            <button className="btn btn-lg btn-primary" onClick={this.handleCreateRoom}>Create Room</button>
          </div>
      </div>
    );
  }
}

export default Popup;
