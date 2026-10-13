
"use client";

import { useState } from "react";

type Level = "5-8" | "9-10" | "11";

type Category =
  | "Critical Thinking"
  | "Sports & Games"
  | "Science & Nature"
  | "Computers & AI"
  | "World & General Knowledge";

type Question = {
  category: Category;
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
};

const CATEGORIES: Category[] = [
  "Critical Thinking",
  "Sports & Games",
  "Science & Nature",
  "Computers & AI",
  "World & General Knowledge",
];

const QUESTIONS: Record<Level, Question[]> = {
  "5-8": [
    {
      category: "Critical Thinking",
      question: "What number comes next: 3, 6, 12, 24, ...?",
      options: ["30", "36", "48", "42"],
      answer: 2,
      explanation: "Each number doubles. Therefore, 24 × 2 = 48.",
    },
    {
      category: "Critical Thinking",
      question: "You overtake the person in second place in a race. What place are you in?",
      options: ["First", "Second", "Third", "Fourth"],
      answer: 1,
      explanation: "You take the position of the person you overtook: second place.",
    },
    {
      category: "Critical Thinking",
      question: "A bat and ball cost ₹110 together. The bat costs ₹100 more than the ball. What does the ball cost?",
      options: ["₹5", "₹10", "₹15", "₹20"],
      answer: 0,
      explanation: "The ball costs ₹5 and the bat costs ₹105. Together they cost ₹110.",
    },
    {
      category: "Sports & Games",
      question: "How many players does one football team usually have on the field at the start of a match?",
      options: ["9", "10", "11", "12"],
      answer: 2,
      explanation: "A standard football team starts with 11 players, including the goalkeeper.",
    },
    {
      category: "Sports & Games",
      question: "In cricket, how many runs are scored when the ball reaches the boundary after touching the ground?",
      options: ["2", "4", "5", "6"],
      answer: 1,
      explanation: "A boundary after the ball touches the ground scores four runs.",
    },
    {
      category: "Sports & Games",
      question: "Which sport uses a shuttlecock?",
      options: ["Tennis", "Squash", "Badminton", "Table tennis"],
      answer: 2,
      explanation: "Badminton is played using a shuttlecock.",
    },
    {
      category: "Science & Nature",
      question: "Why do we see lightning before hearing thunder?",
      options: [
        "Light travels faster than sound.",
        "Thunder starts later.",
        "Clouds block the sound.",
        "Lightning makes no sound.",
      ],
      answer: 0,
      explanation: "Light travels much faster than sound, so the flash reaches us first.",
    },
    {
      category: "Science & Nature",
      question: "Which animal uses echolocation to help it navigate?",
      options: ["Giraffe", "Bat", "Panda", "Kangaroo"],
      answer: 1,
      explanation: "Bats use echoes from sounds they produce to navigate and find prey.",
    },
    {
      category: "Science & Nature",
      question: "Which planet is famous for its prominent rings?",
      options: ["Mars", "Venus", "Saturn", "Mercury"],
      answer: 2,
      explanation: "Saturn is famous for its spectacular rings.",
    },
    {
      category: "Computers & AI",
      question: "What is a computer program?",
      options: [
        "A set of instructions for a computer",
        "A type of painting",
        "A computer screen",
        "A keyboard key",
      ],
      answer: 0,
      explanation: "A program gives a computer instructions to perform tasks.",
    },
    {
      category: "Computers & AI",
      question: "Which example uses artificial intelligence?",
      options: [
        "A wooden ruler",
        "A switched-off television",
        "A voice assistant that understands spoken requests",
        "A plain notebook",
      ],
      answer: 2,
      explanation: "AI can help voice assistants interpret speech and respond.",
    },
    {
      category: "Computers & AI",
      question: "What is the safest way to handle your password?",
      options: [
        "Share it with everyone",
        "Use your name as your password",
        "Post it in a public chat",
        "Keep it private and make it strong",
      ],
      answer: 3,
      explanation: "A strong, private password helps protect your accounts.",
    },
    {
      category: "World & General Knowledge",
      question: "Which is the largest ocean on Earth?",
      options: ["Indian Ocean", "Pacific Ocean", "Arctic Ocean", "Atlantic Ocean"],
      answer: 1,
      explanation: "The Pacific Ocean is the largest ocean on Earth.",
    },
    {
      category: "World & General Knowledge",
      question: "What is the capital of India?",
      options: ["Mumbai", "Jaipur", "New Delhi", "Kolkata"],
      answer: 2,
      explanation: "New Delhi is the capital of India.",
    },
    {
      category: "World & General Knowledge",
      question: "Which imaginary line divides Earth into the Northern and Southern Hemispheres?",
      options: ["Equator", "Prime Meridian", "Tropic of Cancer", "International Date Line"],
      answer: 0,
      explanation: "The Equator divides Earth into the Northern and Southern Hemispheres.",
    },
  ],

  "9-10": [
    {
      category: "Critical Thinking",
      question: "A jacket costs ₹1,000 and has a 20% discount. What is the sale price?",
      options: ["₹700", "₹750", "₹800", "₹900"],
      answer: 2,
      explanation: "20% of ₹1,000 is ₹200, so the sale price is ₹800.",
    },
    {
      category: "Critical Thinking",
      question: "All roses are flowers. Which statement must be true?",
      options: [
        "All flowers are roses.",
        "All roses are flowers.",
        "All flowers fade quickly.",
        "All roses are red.",
      ],
      answer: 1,
      explanation: "The statement itself establishes that every rose is a flower.",
    },
    {
      category: "Critical Thinking",
      question: "A clock shows 3:15. What is the smaller angle between its hour and minute hands?",
      options: ["0°", "7.5°", "15°", "30°"],
      answer: 1,
      explanation: "The minute hand is at 90° and the hour hand at 97.5°. The difference is 7.5°.",
    },
    {
      category: "Sports & Games",
      question: "In cricket, what does a batter's 'duck' mean?",
      options: [
        "The batter is dismissed without scoring.",
        "The batter scores six runs.",
        "The bowler takes three wickets in a row.",
        "The batter hits the ball twice.",
      ],
      answer: 0,
      explanation: "A duck means a batter is dismissed without scoring any runs.",
    },
    {
      category: "Sports & Games",
      question: "In a standard badminton game, what is the usual winning score?",
      options: ["15", "21", "25", "30"],
      answer: 1,
      explanation: "A standard game is played to 21 points, normally with a two-point lead. A cap applies at 30.",
    },
    {
      category: "Sports & Games",
      question: "Which is a legal way for a batter to be dismissed in cricket even if the ball never touches the bat?",
      options: [
        "The ball goes for a boundary.",
        "The bowler changes ends.",
        "The batter is run out while attempting a run.",
        "The batter misses a wide ball.",
      ],
      answer: 2,
      explanation: "A batter can be run out while attempting a run even if the ball never touches the bat.",
    },
    {
      category: "Science & Nature",
      question: "Why does metal often feel colder than wood in the same room?",
      options: [
        "Metal is always at a lower temperature.",
        "Wood creates heat.",
        "Metal has no temperature.",
        "Metal transfers heat away from your hand faster.",
      ],
      answer: 3,
      explanation: "Metal conducts heat better than wood, so it draws heat from your hand faster.",
    },
    {
      category: "Science & Nature",
      question: "Which part of a plant absorbs most of its water from the soil?",
      options: ["Flowers", "Root hairs", "Petals", "Fruit"],
      answer: 1,
      explanation: "Root hairs provide a large surface area for absorbing water and minerals.",
    },
    {
      category: "Science & Nature",
      question: "What causes the phases of the Moon?",
      options: [
        "The Moon changes its actual shape.",
        "Earth's shadow always covers the Moon.",
        "We see different portions of its sunlit side as it orbits Earth.",
        "Clouds cover different parts of it.",
      ],
      answer: 2,
      explanation: "We see different portions of the Moon's sunlit half as it orbits Earth.",
    },
    {
      category: "Computers & AI",
      question: "What is an algorithm?",
      options: [
        "A step-by-step method for solving a problem",
        "A computer screen",
        "A type of computer virus",
        "A physical cable",
      ],
      answer: 0,
      explanation: "An algorithm is a sequence of steps used to solve a problem or complete a task.",
    },
    {
      category: "Computers & AI",
      question: "Why can an AI system sometimes give an incorrect answer confidently?",
      options: [
        "AI cannot process language.",
        "Every AI answer is checked by a human.",
        "AI only copies one website.",
        "It can generate plausible responses without verifying every fact.",
      ],
      answer: 3,
      explanation: "AI can produce convincing text that still contains errors, so important facts should be checked.",
    },
    {
      category: "Computers & AI",
      question: "What does two-factor authentication add to an account?",
      options: [
        "A second username only",
        "An additional identity-verification step",
        "Unlimited storage",
        "Faster internet",
      ],
      answer: 1,
      explanation: "It requires an additional proof of identity beyond the password.",
    },
    {
      category: "World & General Knowledge",
      question: "Which strait separates southeastern India from Sri Lanka?",
      options: ["Bering Strait", "Strait of Malacca", "Palk Strait", "Gibraltar Strait"],
      answer: 2,
      explanation: "The Palk Strait lies between southeastern India and northern Sri Lanka.",
    },
    {
      category: "World & General Knowledge",
      question: "Which branch of government primarily interprets laws?",
      options: ["Judiciary", "Legislature", "Election Commission", "Municipal administration"],
      answer: 0,
      explanation: "The judiciary interprets laws and resolves legal disputes.",
    },
    {
      category: "World & General Knowledge",
      question: "Petra, the ancient archaeological city, is located in which country?",
      options: ["Egypt", "Jordan", "Greece", "Mexico"],
      answer: 1,
      explanation: "Petra is an ancient city in Jordan.",
    },
  ],

  "11": [
    {
      category: "Critical Thinking",
      question: "A price increases by 20% and then decreases by 20%. Compared with the original price, the final price is:",
      options: ["The same", "20% lower", "4% lower", "4% higher"],
      answer: 2,
      explanation: "Starting at 100, the price becomes 120 and then 96. The final price is 4% lower.",
    },
    {
      category: "Critical Thinking",
      question: "A fair six-sided die is rolled once. What is the probability of getting a number greater than 4?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      answer: 1,
      explanation: "The favourable outcomes are 5 and 6, giving 2/6 = 1/3.",
    },
    {
      category: "Critical Thinking",
      question: "All Zors are Mips. No Mip is a Tav. Which conclusion must be true?",
      options: [
        "No Zor is a Tav.",
        "Every Tav is a Zor.",
        "Some Zors are T avs.",
        "Every Mip is a Zor.",
      ],
      answer: 0,
      explanation: "Since every Zor is a Mip and no Mip is a Tav, no Zor can be a Tav.",
    },
    {
      category: "Sports & Games",
      question: "In cricket, which rare dismissal applies when an incoming batter fails to be ready within the permitted time?",
      options: ["Bowled", "Caught", "Timed out", "LBW"],
      answer: 2,
      explanation: "Timed out is an unusual dismissal governed by the applicable playing conditions.",
    },
    {
      category: "Sports & Games",
      question: "In chess, which piece can jump over other pieces?",
      options: ["Bishop", "Rook", "Queen", "Knight"],
      answer: 3,
      explanation: "The knight moves in an L-shape and can jump over intervening pieces.",
    },
    {
      category: "Sports & Games",
      question: "In a standard tennis tiebreak, what is the usual target score, with a two-point lead required?",
      options: ["5", "7", "10", "15"],
      answer: 1,
      explanation: "A standard tiebreak is usually played to at least seven points with a two-point margin, though formats vary.",
    },
    {
      category: "Science & Nature",
      question: "If a wave's speed stays constant and its frequency doubles, what happens to its wavelength?",
      options: ["It doubles", "It halves", "It stays the same", "It becomes four times larger"],
      answer: 1,
      explanation: "Wave speed equals frequency multiplied by wavelength. At constant speed, doubling frequency halves wavelength.",
    },
    {
      category: "Science & Nature",
      question: "Which molecule carries genetic information in most living organisms?",
      options: ["Glucose", "Starch", "DNA", "Hemoglobin"],
      answer: 2,
      explanation: "DNA stores genetic instructions in most living organisms.",
    },
    {
      category: "Science & Nature",
      question: "Why can a satellite remain in orbit around Earth?",
      options: [
        "Gravity continually bends its path around Earth.",
        "There is no gravity in space.",
        "Air pushes it around Earth.",
        "Its engines must run at full power continuously.",
      ],
      answer: 0,
      explanation: "Gravity provides the centripetal force that keeps a satellite on its orbital path.",
    },
    {
      category: "Computers & AI",
      question: "What is the main purpose of a training dataset in supervised machine learning?",
      options: [
        "To decorate an interface",
        "To replace computer hardware",
        "To guarantee every prediction is correct",
        "To help a model learn patterns from labelled examples",
      ],
      answer: 3,
      explanation: "Supervised learning uses labelled examples to learn patterns and make predictions.",
    },
    {
      category: "Computers & AI",
      question: "Why test an AI model on data it has not seen during training?",
      options: [
        "To increase its training data automatically",
        "To estimate how well it generalises to new examples",
        "To guarantee zero errors",
        "To remove the need for evaluation",
      ],
      answer: 1,
      explanation: "Unseen test data helps estimate performance on new examples.",
    },
    {
      category: "Computers & AI",
      question: "What is one risk of training an AI model on biased data?",
      options: [
        "It always becomes faster.",
        "It cannot produce output.",
        "It may reproduce or amplify unfair patterns.",
        "It automatically deletes its training data.",
      ],
      answer: 2,
      explanation: "Biased training data can lead to unfair or less reliable outcomes.",
    },
    {
      category: "World & General Knowledge",
      question: "Which international organisation has maintaining global peace and security as a central purpose?",
      options: ["United Nations", "FIFA", "World Athletics", "International Olympic Committee"],
      answer: 0,
      explanation: "Maintaining international peace and security is a central purpose of the United Nations.",
    },
    {
      category: "World & General Knowledge",
      question: "Which river has historically supported agriculture and settlement in Egypt?",
      options: ["Amazon", "Danube", "Mekong", "Nile"],
      answer: 3,
      explanation: "The Nile has supported agriculture and settlement in Egypt for thousands of years.",
    },
    {
      category: "World & General Knowledge",
      question: "Which body is primarily responsible for making laws at the Union level in India?",
      options: [
        "The Supreme Court alone",
        "Parliament",
        "The Election Commission",
        "The Reserve Bank of India",
      ],
      answer: 1,
      explanation: "Parliament is India's Union-level legislature, subject to the Constitution.",
    },
  ],
};

const LEVEL_LABELS: Record<Level, string> = {
  "5-8": "Class 5–8",
  "9-10": "Class 9–10",
  "11": "Class 11–12",
};

export default function Assessment() {
  const [level, setLevel] = useState<Level>("5-8");
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);

  const questions = QUESTIONS[level];
  const total = questions.length;
  const answered = answers.filter((answer) => answer !== null).length;
  const question = questions[currentIndex];

  const score = questions.reduce((sum, item, index) => {
    return sum + (answers[index] === item.answer ? 1 : 0);
  }, 0);

  function startAssessment() {
    setAnswers(Array(QUESTIONS[level].length).fill(null));
    setCurrentIndex(0);
    setFinished(false);
    setStarted(true);
  }

  function chooseAnswer(index: number) {
    setAnswers((previous) => {
      const updated = [...previous];
      updated[currentIndex] = index;
      return updated;
    });
  }

  function submitAssessment() {
    if (answered !== total) return;
    setFinished(true);
  }

 function resetAssessment() {
  setStarted(false);
  setFinished(false);
  setCurrentIndex(0);
  setAnswers([]);

  document.getElementById("assessment")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
  return (
    <section id="assessment" className="band">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Thinketh learning assessment</p>
          <h2>There is more to learning.</h2>
          <p className="muted max-copy">
            A short introduction to how we think, reason, and explore the
            world. Choose your class level and complete the questions to see
            your results.
          </p>
        </div>

        {!started && (
          <div className="assessment-card">
            <h3>Choose your class level</h3>
            <p className="muted">
              Each assessment includes 15 questions across five subjects.
            </p>

            <label
              htmlFor="assessment-level"
              style={{ display: "block", marginTop: 20, marginBottom: 8 }}
            >
              Class
            </label>

            <select
              id="assessment-level"
              value={level}
              onChange={(event) => setLevel(event.target.value as Level)}
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid var(--line)",
                borderRadius: 10,
                background: "var(--bg)",
                color: "var(--ink)",
                marginBottom: 22,
              }}
            >
              <option value="5-8">Class 5–8</option>
              <option value="9-10">Class 9–10</option>
              <option value="11-12">Class 11</option>
            </select>

            <div className="chips">
              {CATEGORIES.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>

            <button
              type="button"
              className="btn spaced"
              onClick={startAssessment}
            >
              Begin assessment
            </button>

            <p className="note">
              Your answers and correct responses will be shown at the end.
            </p>
          </div>
        )}

        {started && !finished && question && (
          <div className="assessment-card">
            <div className="progress-label">
              {LEVEL_LABELS[level]} · Question {currentIndex + 1} of {total}
            </div>

            <div
              className="progress-track"
              role="progressbar"
              aria-label="Questions answered"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={answered}
            >
              <i style={{ width: `${(answered / total) * 100}%` }} />
            </div>

            <p className="eyebrow">{question.category}</p>
            <h3>{question.question}</h3>

            <div className="option-list">
              {question.options.map((option, index) => {
                const selected = answers[currentIndex] === index;

                return (
                  <button
                    type="button"
                    key={option}
                    className="option"
                    onClick={() => chooseAnswer(index)}
                    aria-pressed={selected}
                    style={{
                      borderColor: selected ? "var(--ink)" : "var(--line)",
                      background: selected ? "var(--bg2)" : "var(--soft)",
                    }}
                  >
                    <strong style={{ marginRight: 10 }}>
                      {String.fromCharCode(65 + index)}.
                    </strong>
                    {option}
                  </button>
                );
              })}
            </div>

            <p className="note">
              {answered} of {total} questions answered
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                marginTop: 22,
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                className="btn ghost"
                onClick={() => setCurrentIndex((index) => index - 1)}
                disabled={currentIndex === 0}
              >
                Previous
              </button>

              {currentIndex < total - 1 ? (
                <button
                  type="button"
                  className="btn"
                  onClick={() => setCurrentIndex((index) => index + 1)}
                >
                  Next question
                </button>
              ) : (
                <button
                  type="button"
                  className="btn"
                  onClick={submitAssessment}
                  disabled={answered !== total}
                  title={
                    answered !== total
                      ? "Answer every question before submitting"
                      : undefined
                  }
                >
                  View results
                </button>
              )}
            </div>

            {currentIndex === total - 1 && answered !== total && (
              <p className="note">
                Please answer all questions before viewing your results.
                Use Previous to return to unanswered questions.
              </p>
            )}
          </div>
        )}

        {finished && (
          <div className="assessment-card">
            <p className="eyebrow">Assessment complete</p>
            <h3>Your results</h3>

            <p style={{ marginTop: 18, fontSize: "1.2rem" }}>
              <strong>{score} / {total}</strong> correct
            </p>

            <p className="muted" style={{ marginTop: 12 }}>
              {score >= 13
                ? "Excellent work. Your curiosity and understanding are off to a strong start."
                : score >= 10
                  ? "A strong effort. Keep exploring and building on what you know."
                  : score >= 7
                    ? "A promising start. Every question is an opportunity to learn something new."
                    : "Keep asking questions and exploring. Learning is a journey, not a single score."}
            </p>

            <div style={{ marginTop: 32 }}>
              <h3>Answer review</h3>

              {questions.map((item, index) => {
                const correct = answers[index] === item.answer;

                return (
                  <div
                    key={`${index}-${item.category}`}
                    style={{
                      padding: "20px 0",
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <p className="eyebrow">
                      Question {index + 1} · {item.category}
                    </p>

                    <p>
                      <strong>{item.question}</strong>
                    </p>

                    <p className="note">
                      Your answer:{" "}
                      {String.fromCharCode(65 + answers[index]!)}.{" "}
                      {item.options[answers[index]!]}
                    </p>

                    {!correct && (
                      <p className="note">
                        Correct answer:{" "}
                        {String.fromCharCode(65 + item.answer)}.{" "}
                        {item.options[item.answer]}
                      </p>
                    )}

                    <p className="muted" style={{ marginTop: 8 }}>
                      {item.explanation}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 28,
                marginTop: 16,
              }}
            >
              <p className="eyebrow">Continue with Thinketh</p>
              <h3>This is just the beginning.</h3>
              <p className="muted max-copy" style={{ marginTop: 12 }}>
                There is so much more to learn beyond these questions.
                Connect with us to explore a full assessment and learn more
                about joining Thinketh.
              </p>

              
                <a
                  className="btn spaced"
                  href="#connect"
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById("connect")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Connect with us
                </a>

            </div>

            <button
              type="button"
              className="btn ghost spaced"
              onClick={resetAssessment}
            >
              Take it again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
