import React from 'react';
import Room from './Room';
import $ from 'jquery';

class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "http://localhost:3001/chats",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", 'Bearer '+ "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1OTY2MzQ0MjN9.whYhvWu1hk9NLeE3mwwtzyJFfBhylDHJP2UyvFtLZS4");
      },
      success: function(data) {
        this.setState({rooms: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  render() {
    const rooms = this.state.rooms;
    return (
      <div className="left">
        <ul className="people">
          {rooms.map(room => (
            <Room room={room} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RoomsList;
