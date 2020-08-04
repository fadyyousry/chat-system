import React from 'react';

function OutgoingMessage(props) {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <Message />
      </div>
    </div>
  );
}

function IncomingMessage(props) {
  return(
    <div className="incoming_msg">
      <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <Message />
        </div>
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>{props.message}</p>
      <span className="time_date">{props.messageTime}</span>
    </div>
  );
}

export {OutgoingMessage, IncomingMessage};
