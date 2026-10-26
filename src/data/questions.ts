export type Question = {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  why: string;
};

const q = (id: string, prompt: string, options: string[], answer: number, why: string): Question => ({
  id,
  prompt,
  options,
  answer,
  why,
});

export type PillarSlug = "think" | "life" | "money" | "civic" | "tech" | "world";

export type Pillar = {
  slug: PillarSlug;
  name: string;
  tagline: string;
  title: string;
  description: string;
  intro: string;
  why: string;
  topics: string[];
  tone: "primary" | "accent" | "highlight";
  questions: Question[];
  related: PillarSlug[];
};

export const pillars: Pillar[] = [
  {
    slug: "think",
    name: "Think",
    tagline: "Logic, reasoning and problem-solving",
    title: "Critical Thinking for Students (Class 5–12)",
    description:
      "Learn critical thinking with real puzzles, logical fallacies and reasoning questions for Class 5–12 students, with every answer explained.",
    intro:
      "Critical thinking means checking an idea before you accept it: what is the claim, what is the evidence, and what else could explain it?",
    why: "Every subject, every news headline and every big decision gets easier when you can spot a weak argument.",
    topics: ["Logical fallacies", "Evidence vs opinion", "Cause and correlation", "Breaking down problems"],
    tone: "primary",
    related: ["tech", "world"],
    questions: [
      q("t1", "Ice-cream sales and drowning cases both rise in summer. What is the best conclusion?", ["Ice cream causes drowning", "Hot weather increases both", "Drowning makes people buy ice cream", "It is pure coincidence"], 1, "Two things rising together is correlation, not cause. A third factor, hot weather, drives both."),
      q("t2", "\"Everyone in my class has this phone, so it must be the best.\" What is the flaw?", ["None, it is logical", "Popularity is not proof of quality", "The class is too small", "Phones cannot be compared"], 1, "This is the bandwagon fallacy: many people liking something does not make it the best."),
      q("t3", "A video says a drink \"boosts memory by 300%\". What should you ask first?", ["What flavour is it?", "Who measured it, and how?", "How many views it has", "Whether it is expensive"], 1, "A big number means nothing without knowing the source, the test and who paid for it."),
    ],
  },
  {
    slug: "life",
    name: "Life",
    tagline: "Communication, emotions and decisions",
    title: "Life Skills for Teenagers: Communication & Decision-Making",
    description:
      "Practical life skills for school students: communicating clearly, handling disagreement, managing emotions and making better decisions.",
    intro: "Life skills are the habits that help you speak up, listen well, stay calm under pressure and choose wisely.",
    why: "Marks open doors, but how you talk, listen and decide shapes what happens after you walk through them.",
    topics: ["Speaking with confidence", "Handling disagreement", "Naming emotions", "Making decisions"],
    tone: "accent",
    related: ["think", "civic"],
    questions: [
      q("l1", "A friend is upset and venting. What usually helps most first?", ["Give advice right away", "Listen and repeat back what you heard", "Change the topic", "Tell them it is not a big deal"], 1, "People feel helped when they feel heard. Advice lands better after listening."),
      q("l2", "You disagree with a teammate's idea. Which response is most useful?", ["\"That's a bad idea.\"", "Stay silent", "\"I see a risk here. Can we test it?\"", "Do your own thing"], 2, "Naming the specific concern and suggesting a test keeps the focus on the idea, not the person."),
      q("l3", "Before a big choice, what is a good first step?", ["Ask one friend and go with it", "List options and what each costs you", "Pick the most popular option", "Wait until the deadline"], 1, "Writing options and trade-offs makes hidden costs visible and reduces panic decisions."),
    ],
  },
  {
    slug: "money",
    name: "Money",
    tagline: "Budgeting, saving, banking and scams",
    title: "Financial Literacy for School Students in India",
    description:
      "Financial literacy for students: budgeting pocket money, saving, interest, UPI safety and spotting scams, explained with real examples.",
    intro: "Money skills are about making choices: what to spend now, what to save, and how to avoid being tricked.",
    why: "You will make money decisions every day for the rest of your life. Starting early makes them habits, not guesses.",
    topics: ["Needs vs wants", "Budgeting pocket money", "Simple and compound interest", "UPI and online scams"],
    tone: "accent",
    related: ["tech", "civic"],
    questions: [
      q("m1", "Someone calls saying you won a prize and asks for your UPI PIN to send it. What should you do?", ["Share the PIN quickly", "Hang up — a PIN is only needed to pay, never to receive", "Share half the PIN", "Ask them to call later"], 1, "You never need a UPI PIN to receive money. Anyone asking for it is trying to take money from you."),
      q("m2", "₹1,000 earns 10% interest per year, compounded. Roughly how much after 2 years?", ["₹1,100", "₹1,200", "₹1,210", "₹2,000"], 2, "Year 1: ₹1,100. Year 2: 10% of ₹1,100 = ₹110, so ₹1,210. Interest earns interest."),
      q("m3", "Which is a 'need' rather than a 'want'?", ["A new game skin", "School bus fare", "A second pair of headphones", "A cafe snack"], 1, "A need is something you can't reasonably go without. Getting to school is one."),
    ],
  },
  {
    slug: "civic",
    name: "Civic",
    tagline: "Rights, responsibilities and public systems",
    title: "Civic Sense for Students: Rights, Duties & How India Works",
    description:
      "Civic education for Class 5–12: fundamental rights and duties, how laws are made, local government and everyday civic sense in India.",
    intro: "Civic sense is knowing how the systems around you work, from your panchayat to Parliament, and what you owe each other.",
    why: "A country runs better when citizens know their rights, respect their duties and know where to raise a problem.",
    topics: ["Fundamental rights and duties", "How a law is made", "Local government", "Everyday civic sense"],
    tone: "highlight",
    related: ["life", "world"],
    questions: [
      q("c1", "Who makes laws for the whole of India?", ["The Supreme Court", "Parliament", "The Prime Minister alone", "State police"], 1, "Parliament (Lok Sabha and Rajya Sabha) passes central laws. Courts interpret them."),
      q("c2", "Which of these is a Fundamental Duty in the Indian Constitution?", ["Paying for school", "Protecting public property", "Voting in every election", "Owning land"], 1, "Article 51A lists duties, including safeguarding public property and abjuring violence."),
      q("c3", "A streetlight on your road has been broken for weeks. Who is usually responsible?", ["The Election Commission", "Your local municipal body or panchayat", "The RBI", "Your school"], 1, "Local bodies handle streetlights, water and waste. Most have complaint helplines or apps."),
    ],
  },
  {
    slug: "tech",
    name: "Tech",
    tagline: "Digital safety, AI and media literacy",
    title: "Digital Safety & AI Basics for Students",
    description:
      "Digital literacy for students: online safety, privacy, how AI tools work, deepfakes and checking whether a post is real.",
    intro: "Being good with technology is not just using apps. It's knowing how they work, what they collect and when they can be wrong.",
    why: "AI and social media shape what you see and believe. Understanding them keeps you safe and in control.",
    topics: ["Passwords and privacy", "How AI chatbots work", "Spotting deepfakes", "Checking a viral post"],
    tone: "primary",
    related: ["think", "money"],
    questions: [
      q("x1", "An AI chatbot gives you a confident answer with a source. What should you do?", ["Trust it fully", "Check the source exists and says that", "Ignore all AI answers", "Ask the same question again"], 1, "AI tools can invent facts and sources. Confident wording is not proof."),
      q("x2", "Which password is strongest?", ["rahul2010", "Password@123", "three-mango-river-lamp", "123456789"], 2, "Long phrases of random words are easier to remember and much harder to guess."),
      q("x3", "A shocking video of a celebrity goes viral. A good first check?", ["Count the likes", "Look for the same news from trusted outlets", "Share it to ask friends", "Check the comments"], 1, "If something big really happened, reliable news sources will report it."),
    ],
  },
  {
    slug: "world",
    name: "World",
    tagline: "Science, society and general knowledge",
    title: "General Knowledge & How the World Works for Students",
    description:
      "General knowledge for students that goes beyond memorising: science behind everyday things, society and current affairs, explained.",
    intro: "General knowledge is more than facts. It's understanding why things happen, from rain to rising prices.",
    why: "When you understand how the world works, news makes sense and new subjects feel connected.",
    topics: ["Everyday science", "Climate and nature", "How economies work", "Reading the news"],
    tone: "highlight",
    related: ["civic", "money"],
    questions: [
      q("w1", "Why does a steel ship float but a steel nail sinks?", ["Ships are lighter", "The ship's shape pushes aside lots of water", "Sea water is magic", "Nails are heavier than ships"], 1, "A hollow hull displaces a large volume of water, creating enough upward force to float."),
      q("w2", "What mainly brings the monsoon to India?", ["Snow melting in the Himalayas", "Seasonal winds carrying moisture from the ocean", "The moon's pull", "Volcanoes"], 1, "Land heats faster than sea in summer, drawing moist ocean winds inland."),
      q("w3", "If prices of most things rise over time, this is called…", ["Deflation", "Inflation", "Taxation", "Recession"], 1, "Inflation means each rupee buys a bit less than before."),
    ],
  },
];

export const getPillar = (slug: string) => pillars.find((p) => p.slug === slug);
