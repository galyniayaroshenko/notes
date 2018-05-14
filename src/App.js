import React, { Component } from 'react';
import './App.css';

import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import Filter from './components/Filter';

class App extends Component {
  state = {
    // notes: [],
    notes: JSON.parse(localStorage.getItem('notes')),
    valueFilter: ''
  };

  componentDidMount = () => {
    const localNotes = JSON.parse(localStorage.getItem('notes'));

    if (localNotes) {
      this.setState(Object.assign({}, this.state, { notes: localNotes }));
    }
  };

  // componentDidUpdate = () => {
  //   this._updateLocalStorage();
  // };

  handleNoteDelete = (note) => {
    const noteId = note.id;
    const newNotes = this.state.notes.filter(function(note) {
      return note.id !== noteId;
    });

    this.setState(Object.assign({}, this.state, { notes: newNotes }));
  };

  handleNoteAdd = (newNote) => {
    let newNotes = this.state.notes.slice();

    if (newNote.text) {
      newNotes.unshift(newNote);
      this.setState({ notes: newNotes, valueFilter: '' });
    }

    console.log('!!!', JSON.parse(localStorage.getItem('notes')));
  };

  handelFilter = (e) => {
    const value = e.target.value.toLowerCase();

    const result = JSON.parse(localStorage.getItem('notes')).filter(item => {
    // const result = this.state.notes.filter(item => {
      const searchValue = item.text.toLowerCase();

      return searchValue.indexOf(value) !== -1;
    });

    this.setState({ notes: result, valueFilter: e.target.value });
  };

  render = () => {
    return (
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <Filter onFilter={this.handelFilter} valueFilter={this.state.valueFilter}/>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
      </div>
    );
  }

  // _updateLocalStorage = () => {
  //   const notes = JSON.stringify(this.state.notes);

  //   localStorage.setItem('notes', notes);
  // }
}

export default App;
