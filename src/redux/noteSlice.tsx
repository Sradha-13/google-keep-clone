import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: number;
  title: string;
  content: string;
  pinned: boolean;
  color: string;
  image?: string; // Base64 or image URL
}

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    pinNote: (state, action: PayloadAction<number>) => {
      const note = state.notes.find(note => note.id === action.payload);
      if (note) {
        note.pinned = !note.pinned;
      }
    },
  },
});

export const { addNote, deleteNote, pinNote } = noteSlice.actions;
export default noteSlice.reducer;
