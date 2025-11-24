// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WizardHeader from '../components/WizardHeader.jsx';
import Card from '../components/Card.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <WizardHeader
        title="Times Wizard"
        subtitle="Let’s make times tables feel like magic."
      />

      <main className="page-content">
        <PrimaryButton
          label="Start practicing"
          onClick={() => navigate('/practice')}
          style={{ marginTop: 8, marginBottom: 8 }}
        />

        <Card>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Practice
          </h2>
          <p
            style={{
              margin: '4px 0 8px',
              fontSize: 14,
              color: '#4b5563',
            }}
          >
            Pick a table or mixed questions and try 10 at a time.
          </p>
          <PrimaryButton
            label="Go"
            onClick={() => navigate('/practice')}
          />
        </Card>

        <Card>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Tips & Tricks
          </h2>
          <p
            style={{
              margin: '4px 0 8px',
              fontSize: 14,
              color: '#4b5563',
            }}
          >
            Short, simple tricks to help times tables stick.
          </p>
          <PrimaryButton
            label="Open"
            onClick={() => navigate('/tips')}
          />
        </Card>

        <Card>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            My Progress
          </h2>
          <p
            style={{
              margin: '4px 0 8px',
              fontSize: 14,
              color: '#4b5563',
            }}
          >
            See how your magic is growing over time.
          </p>
          <PrimaryButton
            label="View"
            onClick={() => navigate('/progress')}
          />
        </Card>

        <Card>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            About the Wizard
          </h2>
          <p
            style={{
              margin: '4px 0 8px',
              fontSize: 14,
              color: '#4b5563',
            }}
          >
            Learn the story of Times Wizard and how he helps.
          </p>
          <PrimaryButton
            label="Read"
            onClick={() => navigate('/about')}
          />
        </Card>

        <p
          style={{
            marginTop: 16,
            fontSize: 14,
            textAlign: 'center',
            color: '#6b7280',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/teacher')}
        >
          For teachers and grown-ups
        </p>
      </main>

      <BottomNav />
    </div>
  );
}