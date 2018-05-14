import React, { Component } from 'react';

import Note from './Note';

class NotesGrid extends Component {
  render = () => {
    const onNoteDelete = this.props.onNoteDelete;

    return (
      <div className="notes-grid">
        {
          this.props.notes &&
          this.props.notes.map(function(note, i){
            return (
              <Note
                width='250px'
                key={note.id}
                onDelete={onNoteDelete.bind(null, note)}
                color={note.color}>
                {note.text}
              </Note>
            );
          })
        }
      </div>
    );
  }
}

export default NotesGrid;
