import React from 'react';
import { url, jwt } from '../../helper';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false
    }

    this.handleConnection = this.handleConnection.bind(this);
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
        'Authorization': 'Bearer ' + jwt(),
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
        'Authorization': 'Bearer ' + jwt(),
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

  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{this.props.room.name}</h5>
          <button className="btn btn-primary" onClick={this.handleConnection} disabled={this.state.connected}>
            Join and chat now!
          </button>
        </div>
      </div>
    );
  }
}

export default Room;
