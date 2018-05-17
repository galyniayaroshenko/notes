import React, { Component } from 'react';
import './App.css';

import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import Search from './components/Search';

class App extends Component {
  state = {
    notes: [],
    search: false,
    serachValue: '',
    noteEdit: {}
  };

  /* hooks */
  componentWillMount() {
    const localNotes = JSON.parse(localStorage.getItem('notes'));

    if (localNotes) {
      this.setState(Object.assign({}, this.state, { notes: localNotes }));
    }
  };

  componentDidMount() {
    const notes = JSON.stringify(this.state.notes);

    localStorage.setItem('notes', notes);
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.search) {
      const notes = JSON.stringify(nextState.notes);

      localStorage.setItem('notes', notes);
    }

    return true;
  }
  /* hooks */

  focusNote = () => {
    const localNotes = JSON.parse(localStorage.getItem('notes'));

    this.setState(Object.assign({}, this.state, { serachValue: '', notes: localNotes }));
  };

  handelSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const result = JSON.parse(localStorage.getItem('notes')).filter(item => {
      return item.text.toLowerCase().indexOf(value) !== -1;
    });

    this.setState(Object.assign({}, this.state, { notes: result, search: true, serachValue: e.target.value }));
  };

  handleNoteAdd = (newNote) => {
    const localNotes = JSON.parse(localStorage.getItem('notes'));
    let newNotes = localNotes.slice();

    if (newNote.text) {
      newNotes.unshift(newNote);
      this.setState(Object.assign({}, this.state, { notes: newNotes, search: false }));
    }
  };

  handleNoteDelete = (note) => {
    const noteId = note.id;
    const newNotes = JSON.parse(localStorage.getItem('notes')).filter((note) => {
      return note.id !== noteId;
    });

    this.setState(Object.assign({}, this.state, { notes: newNotes, search: false, serachValue: '' }));
  };

  handleNoteEdit = (note) => {
    this.setState(Object.assign({}, this.state, { noteEdit: note }));
  };

  noteEdit = (note) => {
    const localNotes = JSON.parse(localStorage.getItem('notes'));
    const newNotes = [];

    localNotes.forEach(item => {
      if (item.id === note.id) {
        newNotes.push(note);
      } else {
        newNotes.push(item);
      }
    });

    this.setState(Object.assign({}, this.state, { notes: newNotes, noteEdit: {} }));
  };

  render() {
    return (
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <Search
          onSearch={this.handelSearch}
          searchValue={this.state.serachValue}
        />
        <NoteEditor
          noteEdit={this.state.noteEdit}
          onFocus={this.focusNote}
          onNoteAdd={this.handleNoteAdd}
          onNoteEdit={this.noteEdit}
        />
        <NotesGrid
          notes={this.state.notes}
          onNoteDelete={this.handleNoteDelete}
          onNoteEdit={this.handleNoteEdit}
        />
      </div>
    );
  }
}

export default App;
