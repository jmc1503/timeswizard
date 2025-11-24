// src/components/BottomNav.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100%',
        padding: '16px 20px',
        backgroundColor: '#ede9fe',
        borderTop: '2px solid #d8d6f9',
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        bottom: 0,
        zIndex: 20,
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: '#7c3aed',
          border: 'none',
          borderRadius: 999,
          padding: '12px 24px',
          color: '#fff',
          fontSize: 16,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        Home
      </button>
    </div>
  );
}