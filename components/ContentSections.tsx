const offerings = [
  ["Personality", "Confidence, communication and the ability to handle a changing world with a calm head."],
  ["Deep learning", "Concepts understood properly in small classes, so each year stands on the one before."],
  ["Freedom to dream", "Exposure to many paths early, so a child picks a direction out of interest and not out of panic."],
  ["A good living", "Skills that earn well and let them build a good life for themselves and for the people they love."],
];

const skills = [
  ["Learning how to learn", "How to focus, remember, ask good questions and teach yourself anything. The skill behind every other skill."],
  ["Social skills", "Listening, teamwork, speaking up, handling disagreement and making friends in a changing world."],
  ["How the world works", "Money, markets, technology, nature and society, learned through real phenomena instead of memorised definitions."],
  ["Sports and movement", "Fitness, discipline, and the habit of playing to win and losing well."],
  ["The world of professions", "Hundreds of ways to earn a good living beyond engineer or a government job, from design, sport and food to media, research and business."],
  ["Integrity and morals", "Role-play of real situations that ask “what would you do?”, so values are practised before they are tested."],
];

function Rows({ items }: { items: string[][] }) {
  return <div>{items.map(([title, description]) => <article className="content-row" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>;
}

function Chips({ items }: { items: string[] }) {
  return <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>;
}

export default function ContentSections() {
  return (
    <>
      <section className="band belief" id="why"><div className="wrap">
        <p className="lead">Getting somewhere is a byproduct of learning continuously. It was never meant to be a sprint at the end of school.</p>
        <p className="muted spaced">When a child learns with attention in the early classes, the later milestones stop feeling huge. Marks, entrances and careers follow naturally from the habit of understanding things well. We build that habit, and we build the person around it.</p>
      </div></section>

      <section id="skills"><div className="wrap">
        <div className="section-head"><h2>What we teach</h2><p className="muted max-copy">School subjects done properly, and the skills school rarely gets to.</p></div>
        <Chips items={["Maths", "Science", "English", "Social Science", "Hindi", "Computers"]} />
        <div className="spaced"><Rows items={skills} /></div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="section-head"><h2>Learning that feels like play</h2><p className="muted max-copy">Games and competitions are part of growing up well. Students compete, perform and win prizes.</p></div>
        <Chips items={["Spell bee", "English speaking", "Debate", "Comics", "Jokes and humour", "Role-play", "Chess", "What would you do?"]} />
      </div></section>

      <section id="do"><div className="wrap">
        <div className="section-head"><h2>What we do</h2><p className="muted">Four things, taught together, from the early classes onward.</p></div>
        <Rows items={offerings} />
      </div></section>

      <section className="band" id="courses"><div className="wrap">
        <div className="section-head"><h2>Every subject, in three stages</h2><p className="muted max-copy">Live online classes for Class 5 to 12. Each subject is taught as Foundation, Intermediate and Advanced. Take one stage on its own, or all three in order.</p></div>
        <div className="three">
          <article><h3>Foundation</h3><p>Concepts from the ground up, with gaps from earlier years filled in.</p><small>3 months</small></article>
          <article><h3>Intermediate</h3><p>Applying what was learned through problems, reasoning and projects.</p><small>2 months</small></article>
          <article><h3>Advanced</h3><p>Depth, speed and real-world challenges, with a chance to be tested.</p><small>1 to 2 months</small></article>
        </div>
      </div></section>

      
    </>
  );
}
