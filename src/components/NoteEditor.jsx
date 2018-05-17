import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    text: '',
    color: '#00ff40',
    editId: null,
    completed: false
  };

  /* hooks */
  componentWillReceiveProps(nextProps) {
    if (nextProps.noteEdit.id) {
      this.setState(Object.assign({}, this.state, {
        text: nextProps.noteEdit.text,
        editId: nextProps.noteEdit.id,
        color: nextProps.noteEdit.color,
        completed: nextProps.noteEdit.completed
      }));
    }
  };
  /* hooks */
  handleCheckboxChange = (e) => {
    this.setState(Object.assign({}, this.state, { completed: !this.state.completed }));
  };

  handleColorChange = (e) => {
    this.setState(Object.assign({}, this.state, { color: e.target.value }));
  };

  handleNoteAdd = () => {
    const newNote = {
      color: this.state.color,
      id: Date.now(),
      text: this.state.text,
      completed: this.state.completed
    };

    this.props.onNoteAdd(newNote);
    this.setState(Object.assign({}, this.state, { text: '', completed: false }));
  };

  handleNoteEdit = () => {
    const newNote = {
      color: this.state.color,
      id: this.state.editId,
      text: this.state.text,
      completed: this.state.completed
    };

    this.props.onNoteEdit(newNote);
    this.setState(Object.assign({}, this.state, { text: '', editId: null, completed: false }));
  };

  handleTextChange = (event) => {
    this.setState(Object.assign({}, this.state, { text: event.target.value }));
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
          <label>Complited:
            <input
              type="checkbox"
              checked={this.state.completed}
              onChange={this.handleCheckboxChange}
            />
          </label>
          {
            this.state.editId ?
              <button
                className="edit-button"
                onClick={this.handleNoteEdit}
              >Edit</button>
            :
              <button
                className="add-button"
                onClick={this.handleNoteAdd}
              >Add</button>
          }
        </div>
      </div>
    );
  }
}

export default NoteEditor;
