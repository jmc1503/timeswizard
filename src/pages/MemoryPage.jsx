import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function MemoryPage() {
  return (
    <div className="page">
      <WizardHeader
        title="Wizard Shortcuts"
        subtitle="Rhymes and tricks coming soon."
      />
      <main className="page-content">
        <p>Memory tricks will live here.</p>
      </main>
      <BottomNav />
    </div>
  );
}