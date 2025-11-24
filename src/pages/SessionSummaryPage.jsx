// src/pages/SessionSummaryPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WizardHeader from '../components/WizardHeader.jsx';
import Card from '../components/Card.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function SessionSummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { session } = location.state || {};

  if (!session) {
    navigate('/');
    return null;
  }

  const minutes = Math.floor(session.durationSeconds / 60);
  const seconds = session.durationSeconds % 60;

  return (
    <div className="page">
      <WizardHeader
        title="Nice work, wizard!"
        subtitle="Here is your spell report."
      />
      <main className="page-content">
        <Card>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: '#6b7280',
            }}
          >
            {session.table === 'mixed'
              ? 'Mixed practice'
              : `${session.table}× table`}
          </p>
          <p
            style={{
              margin: '8px 0 0',
              fontSize: 28,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            {session.correct}/{session.total} correct
          </p>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 16,
              color: '#4b5563',
            }}
          >
            Time: {minutes}m {seconds}s
          </p>
          <p
            style={{
              margin: '12px 0 0',
              fontSize: 16,
              color: '#111827',
            }}
          >
            Every time you practise, your magic gets stronger.
          </p>
        </Card>

        <PrimaryButton
          label="Practise again"
          onClick={() => navigate('/practice')}
        />
        <PrimaryButton
          label="Back to home"
          onClick={() => navigate('/')}
        />
      </main>
      <BottomNav />
    </div>
  );
}