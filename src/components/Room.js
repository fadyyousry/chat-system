import React from 'react';

function Room(props) {
  return (
    <div className="chat_list">
      <div className="chat_people">
        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
        <div className="chat_ib">
          <h5>{props.name}<span className="chat_date">{props.messageTime}</span></h5>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Room;
