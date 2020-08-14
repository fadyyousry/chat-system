import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { url } from '../../helper';
import auth from '../../auth';

class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showEmojiPicker: false
    }

    this.handleCreateMessage = this.handleCreateMessage.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
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
      this.setState({message: ''});
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    event.preventDefault();
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  addEmoji(event) {
    let emoji = event.native;
    this.setState({
      message: this.state.message + emoji
    });
  }

  toggleEmojiPicker() {
    this.setState({
      showEmojiPicker: !this.state.showEmojiPicker,
    });
  }

  render() {
    return (
      <div className="write">
        {this.state.showEmojiPicker ?
          <div className="emoji-picker">
          <Picker onSelect={this.addEmoji} />
          </div>
          : null}
        <form method="post" onSubmit={this.handleCreateMessage}>
          <input className="typing" type="text" value={this.state.message} placeholder="Type a message"
           onChange={this.handleMessageChange}/>
        </form>
        <button className="btn btn-link smiley p-0" onClick={this.toggleEmojiPicker}></button>
      </div>
    );
  }
}

export default Typing;
