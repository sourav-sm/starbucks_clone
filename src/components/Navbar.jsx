import React, { useState } from 'react';
// import {pic} from "../assets/logo2.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#333',
        color: 'white',
      }}
    >
      <div style={{ fontSize: '1.5rem' }}>
        <img src="../assets/logo2.png" alt="pic" />
      </div>

      <div
        style={{
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '100%',
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '100%', // Ensure the ul takes the full width
          }}
        >
          <li style={{ padding: '0.5rem', cursor: 'pointer' }}>Home</li>
          <li style={{ padding: '0.5rem', cursor: 'pointer' }}>About</li>
          <li style={{ padding: '0.5rem', cursor: 'pointer' }}>Contact</li>
        </ul>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        onClick={toggleMenu}
      >
        <div
          style={{
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            margin: '6px 0',
          }}
        ></div>
        <div
          style={{
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            margin: '6px 0',
          }}
        ></div>
        <div
          style={{
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            margin: '6px 0',
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
