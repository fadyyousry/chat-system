import React from 'react';

class Room extends React.Component {
  render() {
    return (
      <div className="card col-3">
        <div className="card-body">
          <h5 className="card-title">{"Card title"}</h5>
          <a href="#" className="btn btn-primary">{"Card link"}</a>
        </div>
      </div>
    );
  }
}

export default Room;
