// src/components/PrimaryButton.jsx
import React from 'react';

export default function PrimaryButton({ label, onClick, style, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: '#fbbf24',
        borderRadius: 999,
        border: 'none',
        padding: '12px 20px',
        fontSize: 16,
        fontWeight: 700,
        color: '#111827',
        cursor: 'pointer',
        width: '100%',
        margin: '6px 0',
        ...style,
      }}
    >
      {label}
    </button>
  );
}