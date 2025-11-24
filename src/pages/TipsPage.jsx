import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function TipsPage() {
  return (
    <div className="page">
      <WizardHeader
        title="Tips & Tricks"
        subtitle="Advice to feel confident."
      />
      <main className="page-content">
        <p>Tips content coming soon.</p>
      </main>
      <BottomNav />
    </div>
  );
}