// src/context/ProgressContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ProgressContext = createContext();
const STORAGE_KEY = 'timeswizard_sessions_v1';

export function ProgressProvider({ children }) {
  const [sessions, setSessions] = useState([]);

  // Load saved sessions
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSessions(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Failed to load sessions', e);
    }
  }, []);

  // Save sessions whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    } catch (e) {
      console.warn('Failed to save sessions', e);
    }
  }, [sessions]);

  const addSession = (session) => {
    setSessions((prev) => [...prev, session]);
  };

  const getStatsForTable = (table) => {
    const filtered = sessions.filter((s) => s.table === table);
    if (!filtered.length) return null;

    const last = filtered[filtered.length - 1];
    const bestScore = Math.max(...filtered.map((s) => s.correct));
    const avgScore =
      filtered.reduce((sum, s) => sum + s.correct, 0) / filtered.length;
    const avgDuration =
      filtered.reduce((sum, s) => sum + s.durationSeconds, 0) /
      filtered.length;

    return {
      last,
      bestScore,
      avgScore,
      avgDuration,
      count: filtered.length,
    };
  };

  return (
    <ProgressContext.Provider value={{ sessions, addSession, getStatsForTable }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}