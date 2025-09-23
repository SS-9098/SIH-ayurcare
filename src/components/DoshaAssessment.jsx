import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, ProgressBar, Alert } from 'react-bootstrap';
import { FaLeaf, FaUser, FaSun, FaCloud, FaBolt } from 'react-icons/fa';
import '../App.css'; // General App styles
import './BeautifulLogin.css'; // For shared particle effects if needed, but the main background is in Dosha.css
import './Dosha.css'; // NEW: Dedicated styles for Dosha page

const questions = [
  {
    questionText: 'Which of the following best describes your body frame?',
    options: [
      { text: 'Slender, thin, light', dosha: 'Vata' },
      { text: 'Medium, well-proportioned', dosha: 'Pitta' },
      { text: 'Heavy, broad, large', dosha: 'Kapha' },
      { text: 'Combination of the above', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'How would you describe your appetite and digestion?',
    options: [
      { text: 'Variable, irregular, often gassy', dosha: 'Vata' },
      { text: 'Strong, intense, can get irritable if hungry', dosha: 'Pitta' },
      { text: 'Slow, steady, can easily skip meals', dosha: 'Kapha' },
      { text: 'Stable and predictable', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'What is your typical energy level and activity like?',
    options: [
      { text: 'Quick bursts of energy, restless', dosha: 'Vata' },
      { text: 'Moderate, focused, driven', dosha: 'Pitta' },
      { text: 'Steady, enduring, calm', dosha: 'Kapha' },
      { text: 'A mix of all the above', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'How do you handle stress and emotional challenges?',
    options: [
      { text: 'Tend to worry, anxious, fearful', dosha: 'Vata' },
      { text: 'Tend to be irritable, angry, passionate', dosha: 'Pitta' },
      { text: 'Tend to be calm, stable, avoid confrontation', dosha: 'Kapha' },
      { text: 'Adaptable and balanced in most situations', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'How is your skin and hair type?',
    options: [
      { text: 'Dry, thin, cool, often rough skin', dosha: 'Vata' },
      { text: 'Oily, sensitive, prone to rashes or acne', dosha: 'Pitta' },
      { text: 'Smooth, soft, moist, thick hair', dosha: 'Kapha' },
      { text: 'A mix of two or more types', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'Which of these best describes your sleep patterns?',
    options: [
      { text: 'Light, often restless, prone to insomnia', dosha: 'Vata' },
      { text: 'Sound, but can be interrupted by heat or dreams', dosha: 'Pitta' },
      { text: 'Deep and long, wake up feeling groggy', dosha: 'Kapha' },
      { text: 'Generally consistent, easy to fall asleep and wake up', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'How is your memory and mental activity?',
    options: [
      { text: 'Quick to learn and quick to forget', dosha: 'Vata' },
      { text: 'Sharp, focused, good long-term memory', dosha: 'Pitta' },
      { text: 'Slow to learn, but excellent long-term memory', dosha: 'Kapha' },
      { text: 'A good balance of learning and retention', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'What is your reaction to different temperatures?',
    options: [
      { text: 'Dislike cold, prefer warm weather', dosha: 'Vata' },
      { text: 'Dislike heat, prone to sweating', dosha: 'Pitta' },
      { text: 'Enjoy warm weather, dislike cold and damp', dosha: 'Kapha' },
      { text: 'Adaptable to most climates', dosha: 'Tridoshic' }
    ],
  },
  {
    questionText: 'Which of the following best describes your personality?',
    options: [
      { text: 'Creative, imaginative, and a bit flighty', dosha: 'Vata' },
      { text: 'Intelligent, ambitious, and sometimes irritable', dosha: 'Pitta' },
      { text: 'Calm, nurturing, and compassionate', dosha: 'Kapha' },
      { text: 'A combination of traits, well-rounded', dosha: 'Tridoshic' }
    ],
  },
];

const DoshaAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (dosha) => {
    setAnswers({
      ...answers,
      [currentQuestion]: dosha,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateDosha = () => {
    const counts = { Vata: 0, Pitta: 0, Kapha: 0, Tridoshic: 0 };
    Object.values(answers).forEach(dosha => {
      counts[dosha] += 1;
    });

    let maxDosha = '';
    let maxCount = 0;
    
    // Sort keys to handle ties consistently (e.g., Vata, then Pitta, then Kapha)
    const doshaOrder = ['Vata', 'Pitta', 'Kapha', 'Tridoshic'];

    doshaOrder.forEach(dosha => {
      if (counts[dosha] > maxCount) {
        maxCount = counts[dosha];
        maxDosha = dosha;
      }
    });

    setResult(maxDosha);
  };

  const getDoshaIcon = (dosha) => {
    switch (dosha) {
      case 'Vata':
        return <FaBolt />;
      case 'Pitta':
        return <FaSun />;
      case 'Kapha':
        return <FaCloud />;
      default:
        return <FaLeaf />;
    }
  };

  const doshaDescriptions = {
    Vata: {
      title: 'Vata Dosha',
      description: 'The Vata dosha is associated with the elements of space and air. People with a predominant Vata nature are often creative, energetic, and thin. When in balance, they are enthusiastic and adaptable. When out of balance, they may experience anxiety, dryness, and restless energy.',
      remedies: [
        'Maintain a regular daily routine.',
        'Favor warm, moist, and grounding foods.',
        'Practice calming activities like meditation.',
        'Stay warm and hydrated.'
      ]
    },
    Pitta: {
      title: 'Pitta Dosha',
      description: 'The Pitta dosha is linked to fire and water. Pitta individuals are typically sharp, intelligent, and ambitious. They have a strong digestion and a fiery nature. An imbalanced Pitta can lead to irritability, inflammation, and perfectionism.',
      remedies: [
        'Avoid hot, spicy, and oily foods.',
        'Favor cooling and sweet flavors.',
        'Engage in activities that promote calmness.',
        'Spend time in nature and stay cool.'
      ]
    },
    Kapha: {
      title: 'Kapha Dosha',
      description: 'The Kapha dosha is related to earth and water. Kapha types are generally calm, grounded, and nurturing. They have strong physical endurance and a steady disposition. When imbalanced, Kapha can cause lethargy, weight gain, and attachment.',
      remedies: [
        'Incorporate exercise and physical activity.',
        'Favor light, dry, and stimulating foods.',
        'Avoid heavy, sweet, and cold foods.',
        'Seek out new experiences and challenges.'
      ]
    },
    Tridoshic: {
      title: 'Tridoshic (Balanced)',
      description: 'A Tridoshic constitution means you have a balanced mix of all three doshas. This is a very rare and ideal state, as it suggests a natural balance of physical, mental, and emotional qualities. Your system is adaptable, and you can thrive in a variety of conditions. The goal is to maintain this beautiful equilibrium.',
      remedies: [
        'Continue to listen to your body and its needs.',
        'Maintain a balanced diet and lifestyle.',
        'Practice mindfulness and self-awareness.',
        'Adapt your routine to seasonal changes.'
      ]
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="dosha-page-wrapper"> {/* NEW: Main wrapper for background */}
      <Container className="my-5 dosha-assessment-container">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="p-4 dosha-card">
              <div className="text-center mb-4">
                <FaLeaf size={50} className="mb-3 text-success floating" /> {/* Added floating class */}
                <h1 className="ayurvedic-title">Dosha Assessment</h1>
                <p className="text-muted">Answer a few questions to find your dominant Dosha.</p>
              </div>

              {result ? (
                <div className="text-center result-section">
                  <div className="result-icon-container mb-3">
                    {getDoshaIcon(result)}
                  </div>
                  <h2 className={`dosha-result-title ${result.toLowerCase()}-text`}>Your Dominant Dosha is {result}!</h2>
                  <p className="dosha-result-description">{doshaDescriptions[result].description}</p>
                  <Card className="mt-4 p-3 result-remedies-card">
                    <h4 className="remedies-title">Tips to Maintain Balance:</h4>
                    <ul className="list-unstyled text-start mt-3">
                      {doshaDescriptions[result].remedies.map((remedy, index) => (
                        <li key={index} className="remedy-item mb-2">
                          <FaUser className="me-2 text-success" />
                          {remedy}
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Button variant="outline-success" onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setResult(null);
                  }} className="mt-4">
                    Take the Test Again
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold">Question {currentQuestion + 1} of {questions.length}</span>
                      <span className="text-muted">{Math.round(progress)}% Complete</span>
                    </div>
                    <ProgressBar now={progress} variant="success" className="dosha-progress-bar" />
                  </div>
                  <h4 className="mb-4 question-text">{questions[currentQuestion].questionText}</h4>
                  <Form>
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="mb-3">
                        <Form.Check
                          type="radio"
                          id={`option-${currentQuestion}-${index}`}
                          name={`question-${currentQuestion}`}
                          label={option.text}
                          value={option.dosha}
                          onChange={() => handleAnswer(option.dosha)}
                          checked={answers[currentQuestion] === option.dosha}
                          className="dosha-radio"
                        />
                      </div>
                    ))}
                  </Form>
                  <div className="d-flex justify-content-between mt-4">
                    <Button variant="secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>
                      Previous
                    </Button>
                    {currentQuestion < questions.length - 1 ? (
                      <Button variant="success" onClick={handleNext} disabled={!answers[currentQuestion]}>
                        Next
                      </Button>
                    ) : (
                      <Button variant="success" onClick={calculateDosha} disabled={!answers[currentQuestion]}>
                        Submit
                      </Button>
                    )}
                  </div>
                  {!answers[currentQuestion] && (
                    <Alert variant="warning" className="mt-3">
                      Please select an option to continue.
                    </Alert>
                  )}
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoshaAssessment;