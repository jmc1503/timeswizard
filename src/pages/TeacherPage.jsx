import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function TeacherPage() {
  return (
    <div className="page">
      <WizardHeader
        title="Teacher mode"
        subtitle="Simple guidance for classroom use."
      />
      <main className="page-content">
        <p>Teacher info coming soon.</p>
      </main>
      <BottomNav />
    </div>
  );
}