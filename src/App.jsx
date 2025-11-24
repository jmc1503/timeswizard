// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import PracticeSetupPage from './pages/PracticeSetupPage.jsx';
import PracticeSessionPage from './pages/PracticeSessionPage.jsx';
import SessionSummaryPage from './pages/SessionSummaryPage.jsx';
import ProgressPage from './pages/ProgressPage.jsx';
import MemoryPage from './pages/MemoryPage.jsx';
import TipsPage from './pages/TipsPage.jsx';
import TeacherPage from './pages/TeacherPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice" element={<PracticeSetupPage />} />
        <Route path="/session" element={<PracticeSessionPage />} />
        <Route path="/summary" element={<SessionSummaryPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}