import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, ProgressBar, Alert } from 'react-bootstrap';
import { FaLeaf, FaUser, FaSun, FaCloud, FaBolt } from 'react-icons/fa';
import '../App.css';
import '../BeautifulLogin.css';
import '../Dosha.css';

const questions = [
  {
    questionText: 'Which of the following best describes your body frame?',
    options: [
      { text: 'Slender, light frame; either very tall or short; find it hard to gain weight.', dosha: 'Vata' },
      { text: 'Medium, muscular build; well-proportioned; can gain or lose weight with moderate effort.', dosha: 'Pitta' },
      { text: 'Solid, broad, or heavy frame; large-boned; tend to gain weight easily and lose it slowly.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your appetite and digestion?',
    options: [
      { text: 'Variable or irregular; sometimes very hungry, other times you forget to eat. Prone to gas and bloating.', dosha: 'Vata' },
      { text: 'Strong and sharp; you get irritable or \'hangry\' if you miss a meal. Prone to acidity or heartburn.', dosha: 'Pitta' },
      { text: 'Slow but steady; you enjoy food but can easily skip a meal without much discomfort. Digestion is sluggish.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your skin type?',
    options: [
      { text: 'Tends to be dry, thin, and cool to the touch. May feel rough.', dosha: 'Vata' },
      { text: 'Tends to be fair, oily, sensitive, and warm. Prone to moles, freckles, rashes, or acne.', dosha: 'Pitta' },
      { text: 'Tends to be thick, smooth, oily, and cool. Rarely develops wrinkles.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your hair type?',
    options: [
      { text: 'Hair is dry, thin, or frizzy.', dosha: 'Vata' },
      { text: 'Hair is fine and oily. May be prone to early graying or thinning.', dosha: 'Pitta' },
      { text: 'Hair is thick, oily, wavy, and abundant.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your eyes?',
    options: [
      { text: 'Small, active, and may feel dry. Eyelashes are often thin.', dosha: 'Vata' },
      { text: 'Medium-sized, sharp, and penetrating. Can be sensitive to light or become red.', dosha: 'Pitta' },
      { text: 'Large, calm, and attractive with thick, oily lashes.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How do you react to stress?',
    options: [
      { text: 'You become anxious, worried, or overwhelmed.', dosha: 'Vata' },
      { text: 'You become irritable, critical, or aggressive.', dosha: 'Pitta' },
      { text: 'You become withdrawn, lethargic, or stubborn.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How is your memory?',
    options: [
      { text: 'Quick to learn new things, but also quick to forget them. Excellent short-term memory.', dosha: 'Vata' },
      { text: 'Sharp and focused memory; you rarely forget facts or things you\'ve committed to memory.', dosha: 'Pitta' },
      { text: 'Slow to learn, but once you know something, you have excellent long-term retention.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'Which of these best describes your sleep patterns?',
    options: [
      { text: 'Light sleeper; easily disturbed and prone to insomnia. Often have active dreams.', dosha: 'Vata' },
      { text: 'Sound sleeper for moderate lengths of time, but can wake up feeling hot or thirsty.', dosha: 'Pitta' },
      { text: 'Deep, heavy, and long sleeper. You may have trouble waking up and feel groggy.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your energy levels?',
    options: [
      { text: 'Energy comes in bursts; you are quick and active but can tire easily.', dosha: 'Vata' },
      { text: 'Energy is strong and focused; you are goal-oriented and have high drive.', dosha: 'Pitta' },
      { text: 'Energy is steady and sustained; you are slow to get going but have excellent long-term endurance.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your speech pattern?',
    options: [
      { text: 'You speak quickly, enthusiastically, and may jump between topics.', dosha: 'Vata' },
      { text: 'You speak clearly, precisely, and with conviction. Your tone can be sharp or commanding.', dosha: 'Pitta' },
      { text: 'You speak slowly, thoughtfully, and melodically. Your voice is often calm and pleasant.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'What is your climate preference?',
    options: [
      { text: 'You prefer warm and humid weather and strongly dislike the cold and wind.', dosha: 'Vata' },
      { text: 'You prefer cool weather and dislike intense heat and sun.', dosha: 'Pitta' },
      { text: 'You are generally adaptable but may feel sluggish in cold, damp, or cloudy weather.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your body temperature?',
    options: [
      { text: 'Your hands and feet are often cold to the touch. You have a general preference for warmth.', dosha: 'Vata' },
      { text: 'Your body often feels warm, and you may flush easily. You prefer cool environments.', dosha: 'Pitta' },
      { text: 'Your skin is generally cool but can feel clammy or damp. You are adaptable to temperature.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How do you perspire?',
    options: [
      { text: 'Minimal perspiration; you rarely sweat much, even in heat or during exercise.', dosha: 'Vata' },
      { text: 'You perspire easily and heavily. Sweat may have a strong or sour odor.', dosha: 'Pitta' },
      { text: 'Moderate perspiration, but it is often cool and pleasant-smelling.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'How would you describe your walking gait?',
    options: [
      { text: 'A quick, light, and sometimes hurried walk.', dosha: 'Vata' },
      { text: 'A determined, purposeful, and moderately paced walk.', dosha: 'Pitta' },
      { text: 'A slow, steady, and grounded walk.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'What are your spending habits?',
    options: [
      { text: 'You are an impulse buyer and can be careless with money, spending it quickly.', dosha: 'Vata' },
      { text: 'You are a practical spender, often investing in high-quality or luxury items you feel you\'ve earned.', dosha: 'Pitta' },
      { text: 'You are a natural saver; you accumulate wealth slowly but steadily and dislike spending unnecessarily.', dosha: 'Kapha' }
    ],
  },
  {
    questionText: 'What is your relationship to routine?',
    options: [
      { text: 'You thrive on spontaneity and dislike rigid routines or schedules.', dosha: 'Vata' },
      { text: 'You are organized and efficient; you like having a plan but can adapt it when necessary.', dosha: 'Pitta' },
      { text: 'You feel best with a predictable routine and can feel unsettled by unexpected changes.', dosha: 'Kapha' }
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
    const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(answers).forEach(dosha => {
      counts[dosha] += 1;
    });

    let maxDosha = '';
    let maxCount = 0;
    
    const doshas = ['Vata', 'Pitta', 'Kapha'];
    const sortedCounts = doshas.map(dosha => ({ dosha, count: counts[dosha] })).sort((a, b) => b.count - a.count);

    if (sortedCounts.length >= 2 && sortedCounts[0].count === sortedCounts[1].count && sortedCounts[0].count === sortedCounts[2].count) {
      maxDosha = 'Tridoshic';
    } else if (sortedCounts.length >= 2 && sortedCounts[0].count === sortedCounts[1].count) {
      const tiedDoshas = sortedCounts.filter(d => d.count === sortedCounts[0].count).map(d => d.dosha);
      maxDosha = tiedDoshas.sort().join('-') + ' (Dual)';
    } else if (sortedCounts.length > 0) {
      maxDosha = sortedCounts[0].dosha;
    }

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
      case 'Vata-Pitta (Dual)':
      case 'Pitta-Vata (Dual)':
        return <><FaBolt /><FaSun /></>;
      case 'Vata-Kapha (Dual)':
      case 'Kapha-Vata (Dual)':
        return <><FaBolt /><FaCloud /></>;
      case 'Pitta-Kapha (Dual)':
      case 'Kapha-Pitta (Dual)':
        return <><FaSun /><FaCloud /></>;
      case 'Tridoshic':
      default:
        return <FaLeaf />;
    }
  };

  const doshaDescriptions = {
    'Vata-Pitta (Dual)': {
      title: 'Vata-Pitta (Dual Dosha)',
      description: 'You have a mixed Vata-Pitta constitution, combining the creativity and quickness of Vata with the drive and ambition of Pitta. This can make you a dynamic and energetic individual. When balanced, you are sharp and adaptable, but when imbalanced, you may experience anxiety and irritability.',
      remedies: [
        'Focus on calming, grounding practices to balance Vata, and cooling foods to balance Pitta.',
        'Establish a semi-regular routine to provide structure without feeling constrained.',
        'Avoid excessive stimulation and spicy foods.',
        'Practice mindful awareness to prevent burnout.'
      ]
    },
    'Vata-Kapha (Dual)': {
      title: 'Vata-Kapha (Dual Dosha)',
      description: 'You have a Vata-Kapha constitution, blending the airiness and spontaneity of Vata with the stability and calm of Kapha. This combination can lead to a calm, gentle nature, but you may also experience low energy and a tendency to feel sluggish or withdrawn when stressed.',
      remedies: [
        'Engage in regular, stimulating exercise to combat Kapha stagnation.',
        'Favor warm, dry foods to balance both doshas.',
        'Maintain a consistent routine to ground Vata and provide security for Kapha.',
        'Seek out warmth and new experiences.'
      ]
    },
    'Pitta-Kapha (Dual)': {
      title: 'Pitta-Kapha (Dual Dosha)',
      description: 'Your constitution is Pitta-Kapha, a mix of the fiery, sharp qualities of Pitta and the grounded, steady nature of Kapha. This gives you a strong will and a stable temperament. An imbalance may lead to frustration, weight gain, or a tendency toward stubbornness.',
      remedies: [
        'Focus on light, stimulating foods while avoiding heavy, oily, or very spicy meals.',
        'Incorporate physical activity to balance Kapha, and cooling exercises to balance Pitta.',
        'Practice patience and avoid holding onto grudges.',
        'Stay hydrated and avoid overeating.'
      ]
    },
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

  const answeredQuestionsCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const progress = (answeredQuestionsCount / totalQuestions) * 100;

  return (
    <div className="dosha-page-wrapper">
      <Container className="my-5 dosha-assessment-container">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="p-4 dosha-card">
              <div className="text-center mb-4">
                <FaLeaf size={50} className="mb-3 text-success floating" />
                <h1 className="ayurvedic-title">Dosha Assessment</h1>
                <p className="text-muted">Answer a few questions to find your dominant Dosha.</p>
              </div>

              {result ? (
                <div className="text-center result-section">
                  <div className="result-icon-container mb-3">
                    {getDoshaIcon(result)}
                  </div>
                  <h2 className={`dosha-result-title ${result.split('-')[0].toLowerCase()}-text`}>Your Dominant Dosha is {result}!</h2>
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
                    <Alert variant="success" className="mt-3">
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