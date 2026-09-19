// questions.js — Sci-Math Challenge question bank
// Each question: { id, day, level: 'JH'|'SH', subject: 'Math'|'Science',
//   type: 'mc' | 'id' | 'solve' | 'clue',
//   prompt, choices?, correctIndex?, answers? (array of acceptable strings, normalized),
//   clues? (array of emoji strings, for type 'clue'),
//   timeLimit (seconds), basePoints, maxSpeedBonus }

export const QUESTIONS = [
  // ---------------- JUNIOR HIGH SCHOOL ----------------
  {
    id: 'JH-1', day: 1, level: 'JH', subject: 'Math', type: 'mc',
    prompt: 'A rectangular garden is 3 times as long as it is wide. If the perimeter of the garden is 96 meters, what is the width?',
    choices: ['12 m', '10 m', '24 m', '8 m'], correctIndex: 0,
    timeLimit: 20, basePoints: 100, maxSpeedBonus: 50,
  },
  {
    id: 'JH-2', day: 2, level: 'JH', subject: 'Science', type: 'id',
    prompt: 'This process occurs in plant cells and converts light energy into chemical energy stored in glucose. What is it called?',
    answers: ['photosynthesis'],
    timeLimit: 25, basePoints: 120, maxSpeedBonus: 60,
  },
  {
    id: 'JH-3', day: 3, level: 'JH', subject: 'Math', type: 'solve',
    prompt: 'A store sells notebooks at ₱25 each. If you buy 5 or more, you get a 20% discount on the TOTAL price. How much will you pay for 8 notebooks (in pesos, numbers only)?',
    answers: ['160'],
    timeLimit: 30, basePoints: 150, maxSpeedBonus: 70,
  },
  {
    id: 'JH-4', day: 4, level: 'JH', subject: 'Science', type: 'clue',
    prompt: 'These 4 clues point to ONE science word:',
    clues: ['🍎', '⬇️', '🌍', '🪐'],
    answers: ['gravity'],
    timeLimit: 25, basePoints: 130, maxSpeedBonus: 60,
  },
  {
    id: 'JH-5', day: 5, level: 'JH', subject: 'Math', type: 'mc',
    prompt: 'Which expression is equivalent to 3(2x − 5) + 4x?',
    choices: ['10x − 15', '10x − 5', '6x − 11', '10x + 15'], correctIndex: 0,
    timeLimit: 20, basePoints: 100, maxSpeedBonus: 50,
  },
  {
    id: 'JH-6', day: 6, level: 'JH', subject: 'Science', type: 'solve',
    prompt: 'A car travels 180 km in 2.5 hours. What is its average speed in km/h (numbers only)?',
    answers: ['72'],
    timeLimit: 30, basePoints: 150, maxSpeedBonus: 70,
  },
  {
    id: 'JH-7', day: 7, level: 'JH', subject: 'Math', type: 'id',
    prompt: 'What is the term for a whole number greater than 1 that can only be divided evenly by 1 and itself?',
    answers: ['prime number', 'prime'],
    timeLimit: 25, basePoints: 120, maxSpeedBonus: 60,
  },
  {
    id: 'JH-8', day: 8, level: 'JH', subject: 'Science', type: 'mc',
    prompt: 'Which type of rock forms when magma cools and solidifies?',
    choices: ['Igneous rock', 'Sedimentary rock', 'Metamorphic rock', 'Fossilized rock'], correctIndex: 0,
    timeLimit: 20, basePoints: 100, maxSpeedBonus: 50,
  },
  {
    id: 'JH-9', day: 9, level: 'JH', subject: 'Math', type: 'mc',
    prompt: 'What is the next number in the pattern: 2, 6, 12, 20, 30, ___?',
    choices: ['42', '40', '36', '45'], correctIndex: 0,
    timeLimit: 20, basePoints: 110, maxSpeedBonus: 55,
  },
  {
    id: 'JH-10', day: 10, level: 'JH', subject: 'Science', type: 'id',
    prompt: 'MYSTERY CONCEPT: I am a process where a solid changes directly into a gas, without ever becoming a liquid. What am I?',
    answers: ['sublimation'],
    timeLimit: 25, basePoints: 140, maxSpeedBonus: 65,
  },

  // ---------------- SENIOR HIGH SCHOOL ----------------
  {
    id: 'SH-1', day: 1, level: 'SH', subject: 'Math', type: 'mc',
    prompt: 'If f(x) = 2x² − 3x + 1, what is f(−2)?',
    choices: ['15', '9', '3', '11'], correctIndex: 0,
    timeLimit: 20, basePoints: 100, maxSpeedBonus: 50,
  },
  {
    id: 'SH-2', day: 2, level: 'SH', subject: 'Science', type: 'id',
    prompt: 'This organelle synthesizes proteins by translating mRNA sequences. What is it called?',
    answers: ['ribosome', 'ribosomes'],
    timeLimit: 25, basePoints: 120, maxSpeedBonus: 60,
  },
  {
    id: 'SH-3', day: 3, level: 'SH', subject: 'Math', type: 'solve',
    prompt: 'A basket has 5 red balls and 7 blue balls. Two balls are drawn WITHOUT replacement. What is the probability both are red? Enter as a fraction in lowest terms (e.g. 3/8).',
    answers: ['5/33'],
    timeLimit: 30, basePoints: 160, maxSpeedBonus: 75,
  },
  {
    id: 'SH-4', day: 4, level: 'SH', subject: 'Science', type: 'clue',
    prompt: 'These 4 clues point to ONE science word:',
    clues: ['⚡', '🧪', '🔁', '⏱️'],
    answers: ['catalyst'],
    timeLimit: 25, basePoints: 140, maxSpeedBonus: 65,
  },
  {
    id: 'SH-5', day: 5, level: 'SH', subject: 'Math', type: 'mc',
    prompt: 'What is the value of sin(30°) + cos(60°)?',
    choices: ['1', '0.5', '1.5', '0'], correctIndex: 0,
    timeLimit: 20, basePoints: 110, maxSpeedBonus: 55,
  },
  {
    id: 'SH-6', day: 6, level: 'SH', subject: 'Science', type: 'solve',
    prompt: 'A 2 kg object accelerates from rest to 10 m/s in 5 seconds. What is the net force acting on it, in newtons (numbers only)?',
    answers: ['4'],
    timeLimit: 30, basePoints: 160, maxSpeedBonus: 75,
  },
  {
    id: 'SH-7', day: 7, level: 'SH', subject: 'Math', type: 'id',
    prompt: 'What is the term for a function whose inverse is also a function — one that passes both the vertical and horizontal line tests?',
    answers: ['one-to-one function', 'one to one function', 'one-to-one', 'injective function', 'injective'],
    timeLimit: 25, basePoints: 130, maxSpeedBonus: 60,
  },
  {
    id: 'SH-8', day: 8, level: 'SH', subject: 'Science', type: 'mc',
    prompt: 'Which type of chemical bond involves the SHARING of electron pairs between atoms?',
    choices: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'], correctIndex: 0,
    timeLimit: 20, basePoints: 100, maxSpeedBonus: 50,
  },
  {
    id: 'SH-9', day: 9, level: 'SH', subject: 'Math', type: 'mc',
    prompt: 'In the geometric sequence 3, 9, 27, 81, ..., what is the 7th term?',
    choices: ['2187', '729', '6561', '243'], correctIndex: 0,
    timeLimit: 20, basePoints: 120, maxSpeedBonus: 55,
  },
  {
    id: 'SH-10', day: 10, level: 'SH', subject: 'Science', type: 'id',
    prompt: 'MYSTERY CONCEPT: This principle states that energy cannot be created or destroyed — only transformed from one form to another. What is it called?',
    answers: ['law of conservation of energy', 'conservation of energy'],
    timeLimit: 25, basePoints: 150, maxSpeedBonus: 65,
  },
];

export function getQuestionFor(level, day) {
  return QUESTIONS.find(q => q.level === level && q.day === Number(day));
}

// Normalize a string answer for comparison: lowercase, trim, collapse spaces,
// strip common punctuation and a leading "the"/"a"/"an".
export function normalize(str) {
  if (str == null) return '';
  let s = String(str).toLowerCase().trim();
  s = s.replace(/[₱$]/g, '');
  s = s.replace(/[.,!?'"]/g, '');
  s = s.replace(/\s+/g, ' ').trim();
  s = s.replace(/^(the|a|an)\s+/, '');
  return s;
}

export function isCorrectAnswer(question, rawInput) {
  const given = normalize(rawInput);
  if (!given) return false;
  return question.answers.some(a => normalize(a) === given);
}
