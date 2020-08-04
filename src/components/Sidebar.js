import React from 'react';
import Search from './Search';
import RoomsList from './RoomsList';

function Sidebar(props) {
  return (
    <div className="inbox_people">
      <Search />
      <RoomsList />
    </div>
  );
}

export default Sidebar;
