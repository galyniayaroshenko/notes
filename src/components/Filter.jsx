import React, { Component } from 'react';

class Filter extends Component {
  render = () => {
    return (
      <div className="note-editor">
        <input
          value={this.props.valueFilter}
          placeholder="Filter"
          type="text"
          onChange={this.props.onFilter}
          className="textarea"
        />
      </div>
    );
  };
}

export default Filter;