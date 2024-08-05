"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Note from '../components/Notes';
import { Note as NoteType } from '../redux/noteSlice';

interface NoteListProps {
  notes: NoteType[];
}
const NoteList: React.FC<NoteListProps> = ({ notes }) => {


  console.log(notes);
  const pinnedNotes = notes?.filter(note => note.pinned);
  const otherNotes = notes?.filter(note => !note.pinned);
 

  return (
    <div className="note-list">
      {pinnedNotes?.length > 0 && (
        <>
          <div className='note-heading'>PINNED</div>
          <div className="note-grid">
            {pinnedNotes?.map(note => (
              <Note key={note.id} note={note} />
            ))}
          </div>
        </>
      )}
      {pinnedNotes?.length > 0 && otherNotes?.length > 0 && <div className='note-heading'>OTHERS</div>}
      <div className="note-grid">
        {otherNotes?.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
