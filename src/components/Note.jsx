import React from 'react';

function Note({ onDelete, color, width, children }) {
  const style = {
    backgroundColor: color,
    width: width
  };

  return (
    <div className="note" style={style}>
      <span className="delete-note" onClick={onDelete}> × </span>
      {children}
    </div>
  );
}

export default Note;
