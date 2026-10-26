export const maximumAidPercent = 70;
export const fullFeeFor = (assistedFee: number) => assistedFee / (1 - maximumAidPercent / 100);
export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: Number.isInteger(amount) ? 0 : 2, maximumFractionDigits: 2 })}`;

export const courseStages = [
  { name: "Foundation", months: 4, assistedFee: 4499, instalments: true, focus: "Find your footing", description: "Build strong basics, fill learning gaps and discover how different subjects connect.", outcomes: ["School-subject foundations", "Reasoning and learning habits", "Confidence to ask questions"] },
  { name: "Intermediate", months: 3, assistedFee: 4999, instalments: true, focus: "Put ideas into practice", description: "Turn understanding into action through problems, discussion and collaborative challenges.", outcomes: ["Applied logic and problem-solving", "Communication and teamwork", "Everyday decisions and digital awareness"] },
  { name: "Advanced", months: 2, assistedFee: 4999, instalments: true, focus: "Explore your direction", description: "Take on deeper challenges, explore interests and connect learning with life beyond school.", outcomes: ["Deeper reasoning and projects", "Public speaking and reflection", "Career awareness and real-world thinking"] },
] as const;

export const subjects = ["Maths", "Science", "English", "Social Science", "Hindi", "Computers"];
export const activities = [
  { name: "Debate", prompt: '“Homework should be optional.” Argue the side you disagree with.' },
  { name: "What would you do?", prompt: "You see a classmate copying in an exam. Nobody else noticed. What would you do, and why?" },
  { name: "Spell bee", prompt: "Spell the word that means ‘a strong feeling of excitement’: ENTHUSIASM." },
  { name: "English speaking", prompt: "Explain your favourite game to someone who has never played it, in 60 seconds." },
  { name: "Chess", prompt: "Before every move, ask: what is my opponent threatening?" },
  { name: "Role-play", prompt: "You're a shopkeeper. A customer insists on a refund without a bill. How would you respond calmly?" },
];