import React from 'react';
import equal from 'fast-deep-equal'
import Message from './Message';
import { url, Consumer } from '../../helper';
import auth from '../../auth';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidUpdate(prevProps) {
    if(!equal(this.props.chat, prevProps.chat)) {
      this.updateChat();
    }
  }

  updateChat() {
    const chat_id = this.props.chat.id;
    this.subscription = Consumer.cable.subscriptions.create({channel: "ChatChannel", id: chat_id}, {
      connected: function() { console.log("cable: connected") },
      disconnected: function() { console.log("cable: disconnected") },
      received: (data) => {
        let messages = this.state.messages.slice();
        messages.push(data);
        this.setState({messages: messages});
      }
    });

    fetch(url + '/chats/' + chat_id + '/messages', {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + auth.jwt(),
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
      <div className="chat-wrapper">
      <ul className="chat">
          {messages.map(message => (
            <li key={message.id}>
              <Message message={message} />
            </li>
          ))}
      </ul>
      </div>
    );
  }
}

export default MessagesList;
