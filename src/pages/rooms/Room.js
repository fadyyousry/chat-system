import React from 'react';

class Room extends React.Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{this.props.room.name}</h5>
          <a href="#" className="btn btn-primary">Join and chat now!</a>
        </div>
      </div>
    );
  }
}

export default Room;
