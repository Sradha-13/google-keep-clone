import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '@/components/Sidebar';
import NoteList from '../components/NoteList';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const notes = useSelector((state: RootState) => state.note.notes);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  // Filter notes based on search query
  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(searchQuery) ||
      note.content.toLowerCase().includes(searchQuery)
  );
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
       <TopBar onSearch={handleSearch} />
        {children}
        <NoteList notes={filteredNotes} />
      </div>
    </div>
  );
};

export default Layout;
