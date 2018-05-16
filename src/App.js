import React, { Component } from 'react';
import './App.css';

import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import Search from './components/Search';

class App extends Component {
  state = {
    notes: [],
    search: false,
    serachValue: ''
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
    let newNotes = this.state.notes.slice();

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

  render() {
    return (
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <Search onSearch={this.handelSearch} searchValue={this.state.serachValue} />
        <NoteEditor onNoteAdd={this.handleNoteAdd} onFocus={this.focusNote} />
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
      </div>
    );
  }
}

export default App;
