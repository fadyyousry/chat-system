import React from 'react';

function Room(props) {
  return (
    <li key={props.room.id}>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
      <span className="name">{props.room.name}</span>
      <span className="time">{props.room.created_at}</span>
      <span className="preview">{props.room.message}</span>
    </li>
  );
}

export default Room;
