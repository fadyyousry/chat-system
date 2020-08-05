import React from 'react';
import Room from './Room';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';

class RoomsIndex extends React.Component {
  render(){
    return(
      <div>
        <button className="btn btn-lg btn-primary btn-block col-2" type="submit">
          <FontAwesomeIcon icon={faPlus} /> Create Room
        </button>
        <div className="row mt-5">
          <Room />
        </div>
      </div>
    );
  }
}

export default RoomsIndex;
