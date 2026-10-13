
const team = [
  { number: "01", name: "Amit Karki" },
  { number: "02", name: "Chetan Mehra" },
  { number: "03", name: "Naman Pant" },
];

export default function TeamSection() {
  return (
    <section className="band" id="team">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">THE PEOPLE BEHIND THINKETH</p>
          <h2>Built with purpose.</h2>
          <p className="muted max-copy">
            Three minds, one vision — helping children think independently,
            question confidently, and prepare for the real world.
          </p>
        </div>

        <div className="team-credits">
          {team.map((member) => (
            <div className="team-credit" key={member.number}>
              <span className="team-number">{member.number}</span>
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        <div className="team-social">
          <a
            href="https://www.instagram.com/thinketh_in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Thinketh on Instagram <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://tally.so/r/MeklNl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Care to fill this form <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
