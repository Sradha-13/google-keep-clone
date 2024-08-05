import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, pinNote, Note as NoteType } from '../redux/noteSlice';
import { FaThumbtack, FaBell, FaPalette, FaUserPlus, FaImage, FaEllipsisH,FaTrash } from 'react-icons/fa'; // Importing icons

interface NoteProps {
  note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch();
  console.log(note);

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
            <div className="note-header">
        <button onClick={() => dispatch(pinNote(note.id))} className="pin-button">
          <FaThumbtack style={{ color: note.pinned ? '#ffcc00' : '#e8eaed' }} />
        </button>
      </div>
      <div className="note-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        {note.image && <img src={note.image} alt="Note" className="note-image" />}
      </div>
      <div className="note-actions">
        <button onClick={() => dispatch(deleteNote(note.id))}>
            <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Note;
