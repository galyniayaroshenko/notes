import React from 'react';

function Search({ onSearch, searchValue }) {
  return (
    <div className="note-editor">
      <input
        className="textarea"
        onChange={onSearch}
        placeholder="Search"
        type="text"
        value={searchValue}
      />
    </div>
  );
}

export default Search;
