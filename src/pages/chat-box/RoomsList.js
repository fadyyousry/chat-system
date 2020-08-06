import React from 'react';
import Room from './Room';
import { url, jwt } from '../../helper';


class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };

    this.handleRoom = this.handleRoom.bind(this);
  }

  componentDidMount() {
    fetch(url + '/chats?mine=true', {
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

  handleRoom(e, room) {
    this.props.onChangeRoom(room);
  }

  render() {
    const rooms = this.state.rooms;
    return (
      <div className="left">
        <ul className="people">
            {rooms.map(room => (
              <li className="person" key={room.id} onClick={(e) => this.handleRoom(e, room)}>
                <Room room={room} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default RoomsList;
