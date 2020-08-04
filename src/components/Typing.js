import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Typing(props) {
  return (
    <div className="type_msg">
      <div className="input_msg_write">
        <input type="text" className="write_msg" placeholder="Type a message" />
        <button className="msg_send_btn" type="button"><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
    </div>
  );
}

export default Typing;
