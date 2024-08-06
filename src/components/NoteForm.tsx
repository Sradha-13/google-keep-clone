"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/noteSlice';
import { FaThumbtack, FaBell, FaPalette, FaUserPlus, FaImage, FaEllipsisH, FaCheckSquare, FaPaintBrush } from 'react-icons/fa';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState<string | undefined>(undefined);
  const [isPinned, setIsPinned] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (content || image) {
      dispatch(
        addNote({
          id: Date.now(),
          title,
          content,
          pinned: isPinned,
          color,
          image,
        })
      );
      setTitle('');
      setContent('');
      setColor('');
      setImage(undefined);
      setIsPinned(false);
      setIsExpanded(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setIsExpanded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleSubmit();
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [title, content, image, isPinned, color]);

  return (
    <form ref={formRef} className={`${isExpanded ? 'note-form' : 'note-input'}`}>
       {isExpanded && (
          <div className="note-header">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='note-input-title'        />
            <button
              type="button"
              onClick={() => setIsPinned(!isPinned)}
              className="pin-button"
            >
              <FaThumbtack style={{ color: isPinned ? '#ffcc00' : '#e8eaed' }} />
            </button>
          </div>
        )}
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onClick={() => setIsExpanded(true)}
        className={`${isExpanded ? "note-textarea":'note-input-content'}`}
        rows={isExpanded ? 4 : 1}
      />
          {isExpanded ? 
            <div className="note-footer">
              <div>
              <button type="submit"  className ="note-button" onClick={()=>setIsExpanded(false)}>
                Close
              </button>
              </div>
              <div className="note-actions">
                <FaBell className="note-icon" />
                <FaUserPlus className="note-icon" />
                <div className="note-color-picker">
                  <FaPalette className="note-icon" />
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value)
                      }
                    }
                    className="color-input"
                  />
                </div>
                <FaImage className="note-icon" onClick={() => fileInputRef.current?.click()} />
                <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              </div>
            </div>
         :
         <div className="note-actions">
          <FaCheckSquare className="note-icon" />
          <FaPaintBrush className="note-icon" />
          <FaImage className="note-icon" onClick={() => fileInputRef.current?.click()} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
         </div>}
      {image && <img src={image} alt="Uploaded" className="note-image-preview" />}
    </form>
  );
};

export default NoteForm;
