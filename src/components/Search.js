import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search(props) {
  return (
    <div className="headind_srch">
      <div className="recent_heading">
        <h4>Recent</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <input type="text" className="search-bar" placeholder="Search" />
          <span className="input-group-addon">
            <button type="button"><FontAwesomeIcon icon={faSearch} /></button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
