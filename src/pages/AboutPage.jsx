import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function AboutPage() {
  return (
    <div className="page">
      <WizardHeader
        title="About the Wizard"
        subtitle="Meet your number helper."
      />
      <main className="page-content">
        <p>Story and explanation coming soon.</p>
      </main>

      <BottomNav />
    </div>
  );
}