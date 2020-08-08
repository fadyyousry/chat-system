import React from 'react';

function Room(props) {
  return (
    <div>
      <span className="name">{props.room.name}</span>
      <span className="discription">{props.room.description}</span>
      <span className="preview">{props.room.message}</span>
    </div>
  );
}

export default Room;
