import React, { Component } from 'react';
import './App.css';

import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import Filter from './components/Filter';

class App extends Component {
  state = {
    notes: [],
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
    this.setState(Object.assign({}, this.state, { notes: newNotes, valueFilter: '' }));

    const notes = JSON.stringify(newNotes);
    localStorage.setItem('notes', notes);
  };

  handleNoteAdd = (newNote) => {
    let newNotes = this.state.notes.slice();
    // this.setState(Object.assign({}, this.state, { valueFilter: '' }));

    if (newNote.text) {
      newNotes.unshift(newNote);
      this.setState({ notes: newNotes, valueFilter: '' });

      const notes = JSON.stringify(newNotes);
      localStorage.setItem('notes', notes);
    }

    console.log('!!!', JSON.parse(localStorage.getItem('notes')));
  };

  handelFilter = (e) => {
    const value = e.target.value.toLowerCase();

    console.log('json1', JSON.parse(localStorage.getItem('notes')));
    const result = JSON.parse(localStorage.getItem('notes')).filter(item => {
    // const result = this.state.notes.filter(item => {
      const searchValue = item.text.toLowerCase();

      return searchValue.indexOf(value) !== -1;
    });

    console.log('result', result);
    console.log('json2', JSON.parse(localStorage.getItem('notes')));

    this.setState({ notes: result, valueFilter: e.target.value });
  };

  focusTextInput = () => {
    const value = localStorage.getItem('notes');

    console.log('value123', value);
    console.log('state1', this.state);
    // this.setState(Object.assign({}, this.state, { notes: value, valueFilter: '' }));
    this.setState(Object.assign({}, this.state, { valueFilter: '' }));
    console.log('state2', this.state);
    console.log('impor', localStorage.getItem('notes'));
  };

  render = () => {
    return (
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <Filter onFilter={this.handelFilter} valueFilter={this.state.valueFilter}/>
        <NoteEditor onNoteAdd={this.handleNoteAdd} onFocusTextInput={this.focusTextInput}/>
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
