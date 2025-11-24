// src/pages/TipsPage.jsx
import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import Card from '../components/Card.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function TipsPage() {
  return (
    <div className="page">
      <WizardHeader
        title="Tips & Tricks"
        subtitle="Little ideas to help you feel confident."
      />
      <main className="page-content">
        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Small steps each day
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            Practice just 10 questions every day. Little spells add up before long you’ll feel much faster.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Turn tables into stories
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            For example: “4 × 7 = 28 - four groups of seven knights marching to the castle equals twenty-eight.” A story helps the memory stick.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Use your fingers for 9×
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            On 9×, fold down the finger for your number (e.g., 9×4: fold the 4th finger) and count left fingers (3) and right fingers (6) → 36.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Doubles help a lot
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            If you know 4×6=24, then 8×6 is just double → 48. That shortcut means fewer facts to memorise.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Mix up the tables
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            After you work on one table, do a mixed practice session. It keeps your brain active and ready for anything.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            See patterns in the answers
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            In the 5× table the answers always end in 5 or 0. In the 10× table you just add a 0. Spotting patterns makes the maths easier.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Be confident, not perfect
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            It’s okay to make mistakes. Each attempt is practice. The real magic is improving, not being perfect right away.
          </p>
        </Card>
      </main>
      <BottomNav />
    </div>
  );
}
