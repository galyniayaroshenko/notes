import React from 'react';

function Note({ onDelete, onEdit, color, width, children }) {
  const style = {
    backgroundColor: color,
    width: width
  };

  return (
    <div className="note" style={style}>
      <span className="delete-note" onClick={onDelete}> × </span>
      <span className="edit-note" onClick={onEdit}> Edit </span>
      {children}
    </div>
  );
}

export default Note;
