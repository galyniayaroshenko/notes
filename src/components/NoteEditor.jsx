import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    text: '',
    color: 'yellow'
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
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

  render = () => {
    return (
        <div className="note-editor">
          <textarea
            placeholder="Enter your note here..."
            rows={5}
            className="textarea"
            value={this.state.text}
            onChange={this.handleTextChange}
            onClick={this.props.onFocusTextInput}
          />
          <div>
            <label>Сhoose color for note:
              <input
                value={this.state.color}
                type="color"
                onChange={this.handleColorChange}
              />
            </label>
            <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
          </div>
        </div>
    );
  }
}

export default NoteEditor;
