import React, { Component } from 'react';

class Search extends Component {
  render = () => {
    return (
      <div className="note-editor">
        <input
          className="textarea"
          onChange={this.props.onSearch}
          placeholder="Search"
          type="text"
          value={this.props.searchValue}
        />
      </div>
    );
  };
}

export default Search;
