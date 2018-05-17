import React, { Component } from 'react';

import Note from './Note';

class NotesGrid extends Component {
  render() {
    const onNoteDelete = this.props.onNoteDelete;
    const onNoteEdit = this.props.onNoteEdit;


    return (
      <div className="notes-grid">
        {
          this.props.notes &&
          this.props.notes.map((note, i) => {
            return (
              <Note
                color={note.color}
                key={note.id}
                onDelete={onNoteDelete.bind(null, note)}
                onEdit={onNoteEdit.bind(null, note)}
                width='250px'
              >{note.text}</Note>
            );
          })
        }
      </div>
    );
  }
}

export default NotesGrid;
