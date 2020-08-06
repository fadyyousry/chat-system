import React from 'react';

function Room(props) {
  return (
    <div>
      <span className="name">{props.room.name}</span>
      <span className="time">{props.room.created_at}</span>
      <span className="preview">{props.room.message}</span>
    </div>
  );
}

export default Room;
