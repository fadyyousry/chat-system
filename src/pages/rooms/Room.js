import React from 'react';
import { url } from '../../helper';
import auth from '../../auth';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false
    }

    this.handleConnection = this.handleConnection.bind(this);
    this.handleDeleteRoom = this.handleDeleteRoom.bind(this);
  }

  componentDidMount(){
    let params = {
      "chat_id": this.props.room.id,
    };
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');

    fetch(url + '/connection_exists?' + query, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + auth.jwt(),
      },
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then(result => {
        this.setState(result)
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  handleConnection(event) {
    const body = {connection: {chat_id: this.props.room.id}}
    fetch(url + '/connections', {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + auth.jwt(),
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.setState({connected: true})
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  handleDeleteRoom(event) {
    fetch(url + '/chats/' + this.props.room.id , {
      method: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + auth.jwt(),
      }
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      else {
        this.props.handleDeleteRoom(this.props.room);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  render() {
    return (
      <div className="card text-center">
      <div className="card-header">
      {auth.id() === this.props.room.owner_id ?
        <button className="close" onClick={this.handleDeleteRoom}>X</button> : null
      }
      <span>{this.props.room.name}</span>
      </div>
        <div className="card-body">
          <div className="room-card">
            <p className="card-text">{this.props.room.description}</p>
          </div>
          <button className="btn btn-primary" onClick={this.handleConnection} disabled={this.state.connected}>
            Join and chat now!
          </button>
        </div>
      </div>
    );
  }
}

export default Room;
