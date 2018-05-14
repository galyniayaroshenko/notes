import React, { Component } from 'react';

class Filter extends Component {
  render = () => {
    return (
      <div className="note-editor">
        <input
          className="textarea"
          onChange={this.props.onFilter}
          placeholder="Filter"
          type="text"
          value={this.props.filterValue}
        />
      </div>
    );
  };
}

export default Filter;
