import React from 'react';
import { FaLightbulb, FaBell, FaEdit, FaArchive, FaTrash, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div> <FaBars className="menu-icon" /></div>
        <div>Keep</div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item active">
          <FaLightbulb className="sidebar-icon" />
          Notes
        </li>
        <li className="sidebar-item">
          <FaBell className="sidebar-icon" />
          Reminders
        </li>
        <li className="sidebar-item">
          <FaEdit className="sidebar-icon" />
          Edit labels
        </li>
        <li className="sidebar-item">
          <FaArchive className="sidebar-icon" />
          Archive
        </li>
        <li className="sidebar-item">
          <FaTrash className="sidebar-icon" />
          Trash
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
