import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    text: '',
    color: 'yellow'
  };

  handleColorChange = (e) => {
    this.setState(Object.assign({}, this.state, { color: e.target.value }));
  };

  handleNoteAdd = () => {
    const newNote = {
      color: this.state.color,
      id: Date.now(),
      text: this.state.text
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
        <div className="note-editor">
          <textarea
            className="textarea"
            onChange={this.handleTextChange}
            onClick={this.props.onFocus}
            placeholder="Enter your note here..."
            rows={5}
            value={this.state.text}
          />
          <div>
            <label>Сhoose color for note:
              <input
                onChange={this.handleColorChange}
                type="color"
                value={this.state.color}
              />
            </label>
            <button
              className="add-button"
              onClick={this.handleNoteAdd}
            >Add</button>
          </div>
        </div>
    );
  }
}

export default NoteEditor;
