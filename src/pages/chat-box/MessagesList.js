import React from 'react';
import equal from 'fast-deep-equal'
import Message from './Message';
import { url, jwt } from '../../helper';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidUpdate(prevProps) {
    if(!equal(this.props.chat, prevProps.chat)) {
      this.updateUser();
    }
  }

  updateUser() {
    fetch(url + '/chats/' + this.props.chat.id + '/messages', {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + jwt(),
      },
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then((result) => {
        this.setState({messages: result});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  render() {
    const messages = this.state.messages;
    return (
      <ul className="chat">
        <div className="conversation-start"></div>
          {messages.map(message => (
            <li key={message.id}>
              <Message message={message} />
            </li>
          ))}
      </ul>
    );
  }
}

export default MessagesList;
