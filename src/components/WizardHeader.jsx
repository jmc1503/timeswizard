// src/components/WizardHeader.jsx
import React from 'react';
import logo from '../assets/logo.png';

export default function WizardHeader({ subtitle }) {
  return (
    <header
      style={{
        padding: '32px 20px 16px',
        backgroundColor: '#7c3aed',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div className="logo-spell-wrapper">
        <img
          src={logo}
          alt="Times Wizard Logo"
          className="logo-img"
        />
      </div>

      {subtitle && (
        <p
          className="header-subtitle"
          style={{ marginTop: 4, fontSize: 18 }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
