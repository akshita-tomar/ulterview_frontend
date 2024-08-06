import React, { useState } from 'react';
import './Dropdown.css'; 

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuToggle = (submenuId) => {
    setOpenSubmenu(openSubmenu === submenuId ? null : submenuId);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {React.Children.map(children, (child) => {
            if (child.type === Submenu) {
              return React.cloneElement(child, {
                isOpen: openSubmenu === child.props.id,
                onToggle: () => handleSubmenuToggle(child.props.id),
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};

const Submenu = ({ title, children, isOpen, onToggle }) => {
    console.log(children,"children")
  return (
    <div className="dropdown-submenu">
      <div className="submenu-title" onClick={onToggle}>
        {title}
      </div>
      {isOpen && <div className="submenu-content">{children}</div>}
    </div>
  );
};

export { Dropdown, DropdownItem, Submenu };
