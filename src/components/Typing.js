import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Typing(props) {
  return (
    <div className="write">
        <input type="text" placeholder="Type a message" />
        <button type="button"><FontAwesomeIcon icon={faPaperPlane} /></button>
    </div>
  );
}

export default Typing;
