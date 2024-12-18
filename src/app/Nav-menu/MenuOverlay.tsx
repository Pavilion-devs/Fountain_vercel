// MenuOverlay.tsx
import React from 'react';
import { X } from 'lucide-react';
import "../../styles/menuOverlay.css";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: '01', label: 'OUR BRAND', path: '/brand' },
    { id: '02', label: 'OUR SHOP', path: '/shop' },
    { id: '03', label: 'OUR STORES', path: '/store' },
    { id: '04', label: 'YOUR ACCOUNT', path: '/account' },
    { id: '05', label: 'YOUR CART', path: '/cart' },
    { id: '06', label: 'CONTACT US', path: '/contact' },
  ];

  return (
    <div className="menu-overlay">
      <div className="menu-overlay__header">
        <button 
          className="menu-overlay__close-btn"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="menu-overlay__nav">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className="menu-overlay__link"
            onClick={onClose}
          >
            <span className="menu-overlay__link-number">{item.id}</span>
            <span className="menu-overlay__link-text">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};


export default MenuOverlay;