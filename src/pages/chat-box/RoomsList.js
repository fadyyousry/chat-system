import React from 'react';
import Room from './Room';

class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
  }

  render() {
    const rooms = [];//this.state.rooms;
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
