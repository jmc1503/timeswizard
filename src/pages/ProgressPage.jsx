// src/pages/ProgressPage.jsx
import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import ProgressRow from '../components/ProgressRow.jsx';
import { useProgress } from '../context/ProgressContext.jsx';
import BottomNav from '../components/BottomNav.jsx';

const TABLES = [1,2,3,4,5,6,7,8,9,10,11,12];

export default function ProgressPage() {
  const { getStatsForTable } = useProgress();

  return (
    <div className="page">
      <WizardHeader
        title="My Progress"
        subtitle="Look how your magic is growing."
      />
      <main className="page-content">
        {TABLES.map((t) => (
          <ProgressRow key={t} table={t} stats={getStatsForTable(t)} />
        ))}
        <p
          style={{
            marginTop: 12,
            fontSize: 14,
            color: '#6b7280',
          }}
        >
          This screen is just for you. There are no scores for anyone else, only
          your own growth.
        </p>
      </main>
      <BottomNav />
    </div>
  );
}