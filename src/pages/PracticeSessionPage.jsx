// src/pages/PracticeSessionPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WizardHeader from '../components/WizardHeader.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import {
  generateQuestions,
  generateAnswerOptions,
  getCorrectAnswer,
} from '../utils/questions.js';
import { useProgress } from '../context/ProgressContext.jsx';
import BottomNav from '../components/BottomNav.jsx';
import CelebrationOverlay from '../components/CelebrationOverlay.jsx';

export default function PracticeSessionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addSession } = useProgress();
  const { table } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [startTime, setStartTime] = useState(() => Date.now());
  const [shakeClass, setShakeClass] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  // If someone lands here without picking a table, send them back
  useEffect(() => {
    if (!table) {
      navigate('/practice');
      return;
    }
    const qs = generateQuestions(table);
    setQuestions(qs);
    setCurrentIndex(0);
    setCorrectCount(0);
    setFeedback('');
    setStartTime(Date.now());
  }, [table, navigate]);

  // Generate answer options when question changes
  useEffect(() => {
    if (questions.length && currentIndex < questions.length) {
      setAnswerOptions(generateAnswerOptions(questions[currentIndex]));
    }
  }, [questions, currentIndex]);

  const titleText = useMemo(
    () => (table === 'mixed' ? 'Mixed practice' : `${table}× table`),
    [table]
  );

  if (!table || !questions.length) {
    return null;
  }

  const q = questions[currentIndex];

  const handleAnswer = (selected) => {
    const correct = getCorrectAnswer(q);

    if (selected === correct) {
      setCorrectCount((c) => c + 1);
      setFeedback('Yes! Great spell!');
      setTimeout(() => {
        goNext();
      }, 500);
    } else {
      setFeedback('Nearly there, try again!');
      setShakeClass('shake');
      setTimeout(() => setShakeClass(''), 250);
    }
  };

  const goNext = () => {
    const isLast = currentIndex + 1 >= questions.length;

    if (isLast) {
      const durationSeconds = Math.round((Date.now() - startTime) / 1000);
      const session = {
        date: new Date().toISOString(),
        table,
        correct: correctCount,
        total: questions.length,
        durationSeconds,
      };

      addSession(session);

      // 🎉 Trigger celebration animation
      setShowCelebration(true);

      // After animation ends, go to summary
      setTimeout(() => {
        navigate('/summary', { state: { session } });
      }, 2000);

      return;
    }

    // Otherwise continue
    setCurrentIndex((i) => i + 1);
    setFeedback('');
  };

  return (
    <div className="page" style={{ position: 'relative' }}>
      {showCelebration && (
        <CelebrationOverlay onFinish={() => setShowCelebration(false)} />
      )}

      {!showCelebration && (
        <>
          <WizardHeader
            title={titleText}
            subtitle={`Question ${currentIndex + 1} of ${questions.length}`}
          />

          <main className="page-content">
            <QuestionCard
              question={q}
              answers={answerOptions}
              onSelectAnswer={handleAnswer}
              extraClassName={shakeClass}
            />

            <p
              style={{
                marginTop: 12,
                fontSize: 16,
                textAlign: 'center',
                color: '#4b5563',
                minHeight: 24,
              }}
            >
              {feedback}
            </p>

            <p
              style={{
                marginTop: 4,
                fontSize: 14,
                textAlign: 'center',
                color: '#6b7280',
              }}
            >
              Correct so far: {correctCount}/{questions.length}
            </p>

            <PrimaryButton
              label="Back to home"
              onClick={() => navigate('/')}
              style={{ marginTop: 24 }}
            />
          </main>

          <BottomNav />
        </>
      )}
    </div>
  );
}
