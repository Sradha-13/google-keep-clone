import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface TopBarProps {
  onSearch: (query: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSearch }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    console.log(query);
    setSearchQuery(query);
    onSearch(query);
  };
  return (
    <header className="top-bar">
        <input type="text" placeholder="Search..." className="search-input" value={searchQuery}
          onChange={handleSearchChange}/>
      <div className="user-icon">👤</div>
    </header>
  );
};

export default TopBar;
