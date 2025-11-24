// src/pages/AboutPage.jsx
import React from 'react';
import WizardHeader from '../components/WizardHeader.jsx';
import Card from '../components/Card.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function AboutPage() {
  return (
    <div className="page">
      <WizardHeader
        title="About the Wizard"
        subtitle="Meet your number helper."
      />
      <main className="page-content">
        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Meet the Wizard
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            Deep inside a floating castle of swirling clouds, there lives a wise but cheerful wizard called Calculationus Spellbinder — but his friends just call him “The Wizard”. He loves one thing above all: multiplication magic.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            Unlock the magic
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            Every time a child learns a times table, The Wizard sends out a shimmer of blue sparkles from his wand, and the numbers dance in the air until the answer reveals itself. When you practise with Times Wizard, you are joining him in his magic circle.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            No coins, no scary dragons
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            The Wizard once had a challenge: the numbers from 1× to 12× were hidden behind locked starlit doors. He needed help to free them. That’s why he invites YOU — so you can practise little spells and unlock each door together.
          </p>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            You are the apprentice
          </h2>
          <p style={{ margin: '4px 0 8px', fontSize: 14, color: '#4b5563' }}>
            So whenever you open the app, you step into The Wizard’s chamber. He gives you your wand (your brain), your chalk (your fingers or buttons), and together you build the times-table magic. Ready? Wave your wand. Let the numbers dance. And show The Wizard how your magic grows!
          </p>
        </Card>
      </main>
      <BottomNav />
    </div>
  );
}
