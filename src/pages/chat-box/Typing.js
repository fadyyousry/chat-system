import React from 'react';
import { url } from '../../helper';
import auth from '../../auth';

class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }

    this.handleCreateMessage = this.handleCreateMessage.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleCreateMessage(event) {
    const body = {message: {message: this.state.message}}
    fetch(url + '/chats/' + this.props.chat.id + '/messages', {
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
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    event.preventDefault();
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div className="write">
        <form method="post" onSubmit={this.handleCreateMessage}>
          <input type="text" placeholder="Type a message" onChange={this.handleMessageChange}/>
        </form>
      </div>
    );
  }
}

export default Typing;
