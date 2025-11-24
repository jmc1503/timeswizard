// src/components/TimesTableGrid.jsx
import React from 'react';

const tables = [1,2,3,4,5,6,7,8,9,10,11,12];

export default function TimesTableGrid({ selectedTable, onSelectTable }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        justifyContent: 'center',
        marginTop: 8,
      }}
    >
      {tables.map((t) => {
        const selected = selectedTable === t;
        return (
          <button
            key={t}
            onClick={() => onSelectTable(t)}
            style={{
              width: '28%',
              borderRadius: 12,
              padding: '10px 0',
              border: 'none',
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: selected ? '#7c3aed' : '#ede9fe',
              color: selected ? '#ffffff' : '#4b5563',
            }}
          >
            {t}×
          </button>
        );
      })}

      <button
        onClick={() => onSelectTable('mixed')}
        style={{
          width: '90%',
          borderRadius: 12,
          padding: '10px 0',
          border: 'none',
          fontSize: 18,
          fontWeight: 600,
          cursor: 'pointer',
          backgroundColor: selectedTable === 'mixed' ? '#7c3aed' : '#ede9fe',
          color: selectedTable === 'mixed' ? '#ffffff' : '#4b5563',
          marginTop: 8,
        }}
      >
        Mixed practice
      </button>
    </div>
  );
}