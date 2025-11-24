// src/components/Card.jsx
import React from 'react';

export default function Card({ children, style }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        margin: '8px 0',
        boxShadow: '0 4px 10px rgba(15, 23, 42, 0.08)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}