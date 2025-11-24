import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WizardHeader from '../components/WizardHeader.jsx';
import TimesTableGrid from '../components/TimesTableGrid.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx'
import BottomNav from '../components/BottomNav.jsx';;

export default function PracticeSetupPage() {
  const [selectedTable, setSelectedTable] = useState(null);
  const navigate = useNavigate();

  const startSession = () => {
    if (!selectedTable) return;
    navigate('/session', { state: { table: selectedTable } });
  };

  return (
    <div className="page">
      <WizardHeader
        title="Choose your table"
        subtitle="Pick one table or mixed practice."
      />
      <main className="page-content">
        <p style={{ fontSize: 16, color: '#4b5563', marginBottom: 8 }}>
          Each practice is 10 questions. Take your time and do your best.
        </p>
        <TimesTableGrid
          selectedTable={selectedTable}
          onSelectTable={setSelectedTable}
        />
        <PrimaryButton
          label={selectedTable ? 'Start practice' : 'Choose a table'}
          onClick={startSession}
          style={{ marginTop: 16 }}
        />
      </main>
      <BottomNav />
    </div>
  );
}