// src/components/QuestionCard.jsx
import React from 'react';
import Card from './Card.jsx';

export default function QuestionCard({
  question,
  answers,
  onSelectAnswer,
  extraClassName = '',
}) {
  return (
    <Card style={{ marginTop: 16 }}>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: '#6b7280',
        }}
      >
        Question
      </p>
      <p
        style={{
          margin: '8px 0 0',
          fontSize: 32,
          fontWeight: 700,
          textAlign: 'center',
          color: '#111827',
        }}
      >
        {question.a} × {question.b} = ?
      </p>
      <div
        className={extraClassName}
        style={{
          marginTop: 16,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'space-between',
        }}
      >
        {answers.map((ans) => (
          <button
            key={ans}
            onClick={() => onSelectAnswer(ans)}
            style={{
              width: '48%',
              padding: '10px 0',
              borderRadius: 12,
              border: 'none',
              backgroundColor: '#e0f2fe',
              fontSize: 20,
              fontWeight: 600,
              cursor: 'pointer',
              color: '#111827',
            }}
          >
            {ans}
          </button>
        ))}
      </div>
    </Card>
  );
}