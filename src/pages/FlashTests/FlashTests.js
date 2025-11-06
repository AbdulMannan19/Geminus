import React, { useState } from 'react';
import './FlashTests.css';

function FlashTests() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      sign: '🛑',
      question: 'What does this sign mean?',
      options: ['Stop', 'Yield', 'No Entry', 'Speed Limit'],
      correct: 0
    },
    {
      sign: '⚠️',
      question: 'What does this sign indicate?',
      options: ['Construction', 'Warning/Caution', 'No Parking', 'School Zone'],
      correct: 1
    },
    {
      sign: '🔺',
      question: 'What action should you take?',
      options: ['Stop completely', 'Yield to traffic', 'Speed up', 'Turn around'],
      correct: 1
    }
  ];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flash-tests-container">
      <div className="flash-tests-content">
        <div className="flash-header">
          <h1>⚡ Flash Tests</h1>
          <p>Learn traffic signs with Gemini AI quizzes</p>
        </div>

        {!showResult ? (
          <div className="quiz-section">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
              ></div>
            </div>
            
            <div className="question-card">
              <div className="sign-display">
                {questions[currentQuestion].sign}
              </div>
              <h3>{questions[currentQuestion].question}</h3>
              
              <div className="options-grid">
                {questions[currentQuestion].options.map((option, index) => (
                  <button 
                    key={index}
                    className="option-btn"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="quiz-info">
              <p>Question {currentQuestion + 1} of {questions.length}</p>
              <p>Score: {score}/{questions.length}</p>
            </div>
          </div>
        ) : (
          <div className="result-section">
            <div className="result-card">
              <h2>🎉 Quiz Complete!</h2>
              <div className="final-score">
                <span className="score-text">Your Score</span>
                <span className="score-number">{score}/{questions.length}</span>
                <span className="score-percentage">
                  {Math.round((score / questions.length) * 100)}%
                </span>
              </div>
              
              <div className="performance">
                {score === questions.length && <p>🏆 Perfect! You're a traffic sign expert!</p>}
                {score >= questions.length * 0.7 && score < questions.length && <p>👍 Great job! Keep practicing!</p>}
                {score < questions.length * 0.7 && <p>📚 Keep studying those traffic signs!</p>}
              </div>

              <button className="retry-btn" onClick={resetQuiz}>
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlashTests;