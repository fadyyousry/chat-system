import './style.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';
import Room from './Room';
import Nav from '../Nav';
import Popup from './Popup';
import { url } from '../../helper';
import auth from '../../auth';

class RoomsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoom:{
        name: '',
        description: ''
      },
      showPopup: false,
      errorMassage: ''
    }

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleDeleteRoom = this.handleDeleteRoom.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    fetch(url + '/chats', {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + auth.jwt(),
      },
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then((result) => {
        this.setState({rooms: result});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  handleCreateRoom(room) {
    let rooms = this.state.rooms.slice();
    rooms.push(room);
    this.setState({rooms: rooms});
  }

  handleDeleteRoom(index){
   this.setState({
       rooms: this.state.rooms.filter(el => el !== index )
   });
}

  togglePopup() {
    this.setState({showPopup: !this.state.showPopup});
  }

  render(){
    const rooms = this.state.rooms;
    return(
      <div>
        <Nav />
        <div>
          <button className="btn btn-lg btn-primary" onClick={this.togglePopup}>
            <FontAwesomeIcon icon={faPlus} /> Create a new room
          </button>
          <ul className="row mt-5">
              {rooms.map(room => (
                <li className="col-3 mb-4" key={room.id}><Room room={room}
                 handleDeleteRoom={this.handleDeleteRoom}/></li>
              ))}
          </ul>
          {this.state.showPopup ?
            <Popup
              closePopup={this.togglePopup}
              handleCreateRoom={this.handleCreateRoom}
            />
            : null
          }
        </div>
      </div>
    );
  }
}

export default RoomsIndex;
