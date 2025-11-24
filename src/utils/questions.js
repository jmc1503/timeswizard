// src/utils/questions.js

export function generateQuestions(table) {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      const a = table === 'mixed' ? randomInt(1, 12) : table;
      const b = randomInt(1, 12);
      questions.push({ a, b });
    }
    return questions;
  }
  
  export function getCorrectAnswer(q) {
    return q.a * q.b;
  }
  
  export function generateAnswerOptions(question) {
    const correct = getCorrectAnswer(question);
    const options = new Set([correct]);
  
    while (options.size < 4) {
      const delta = randomInt(-5, 5);
      const candidate = correct + delta;
      if (candidate > 0 && !options.has(candidate)) {
        options.add(candidate);
      }
    }
  
    return shuffle(Array.from(options));
  }
  
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function shuffle(arr) {
    return arr
      .map((v) => ({ v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((o) => o.v);
  }