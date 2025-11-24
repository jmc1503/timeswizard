// src/components/WizardHeader.jsx
import React from 'react';

export default function WizardHeader({ title, subtitle }) {
  return (
    <header style={{
      padding: '32px 20px 16px',
      backgroundColor: '#7c3aed',
      color: 'white'
    }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ margin: '4px 0 0' }}>{subtitle}</p>}
    </header>
  );
}