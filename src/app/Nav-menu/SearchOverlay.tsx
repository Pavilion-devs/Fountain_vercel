// SearchOverlay.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import "../../styles/searchOverlay.css";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="search-overlay">
      <div className="search-overlay__header">
        <button 
          className="search-overlay__close-btn"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="search-overlay__content">
        <form onSubmit={handleSubmit} className="search-overlay__form">
          <input
            type="text"
            className="search-overlay__input"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="search-overlay__button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;