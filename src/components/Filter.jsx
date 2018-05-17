import React, { Component } from 'react';

class Filter extends Component {
  state = {
    all: true,
    completed: false,
    active: false
  };

  /* hooks */
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAdd) {
      this.setState({ all: true, active: false, completed: false });
    }
  }
  /* hooks */

  handleFilter = (id) => {
    const idRadioButton = id.target.value;

    if (idRadioButton === 'all') {
      this.setState({ all: true, active: false, completed: false });
    } else
    if (idRadioButton === 'completed') {
      this.setState({ completed: true, all: false, active: false });
    } else
    if (idRadioButton === 'active') {
      this.setState({ active: true, completed: false, all: false });
    } else {
      console.log('I do not know this id');
    }

    this.props.onHandleFilter(idRadioButton);
  };

  render() {
    return (
      <div>
        <h4>Filter:</h4>
        <input
          name="filter"
          type="radio"
          id="all"
          value="all"
          checked={this.state.all}
          onChange={this.handleFilter}
        />All
        <input
          name="filter"
          type="radio"
          id="completed"
          value="completed"
          checked={this.state.completed}
          onChange={this.handleFilter}
        />Completed
        <input
          name="filter"
          type="radio"
          id="active"
          value="active"
          checked={this.state.active}
          onChange={this.handleFilter}
        />Active

      </div>
    );
  };
}

export default Filter;
