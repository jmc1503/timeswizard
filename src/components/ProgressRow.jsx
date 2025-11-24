// src/components/ProgressRow.jsx
import React from 'react';
import Card from './Card.jsx';

export default function ProgressRow({ table, stats }) {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#111827',
          }}
        >
          {table}× table
        </span>
        <span
          style={{
            fontSize: 14,
            color: '#6b7280',
          }}
        >
          {stats ? `${stats.last.correct}/10 last time` : 'No sessions yet'}
        </span>
      </div>
      {stats && (
        <>
          <div
            style={{
              width: '100%',
              height: 10,
              borderRadius: 999,
              backgroundColor: '#e5e7eb',
              overflow: 'hidden',
              marginTop: 4,
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(stats.avgScore / 10) * 100}%`,
                backgroundColor: '#10b981',
              }}
            />
          </div>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 12,
              color: '#6b7280',
            }}
          >
            Best: {stats.bestScore}/10 · Sessions: {stats.count}
          </p>
        </>
      )}
    </Card>
  );
}