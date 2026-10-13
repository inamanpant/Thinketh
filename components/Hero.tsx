export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="eyebrow">An online school for Class 5–11</p>
        <h1>Learn early.<br />Choose freely.</h1>
        <p className="hero-sub">
          Thinketh is an online school of learning for Class 5 to 11. We help children grow into people who know their own minds, so the dream they pick is one they have been preparing for all along.
        </p>
        <div className="cta">
          <a className="btn" href="#assessment">Take the free assessment</a>
          <a className="btn ghost" href="#connect">Talk to our team</a>
        </div>
        <div className="chart">
          <svg viewBox="0 0 640 230" role="img" aria-label="Two paths from Class 5 to Class 12. Thinketh learning rises steadily.">
            <line className="axis" x1="20" y1="205" x2="620" y2="205" />
            <path className="chart-dashed draw" pathLength="1" d="M20 198 L440 192 L490 182 L540 140 L580 70 L620 22" />
            <path className="chart-solid draw" pathLength="1" d="M20 198 C160 184 300 130 430 92 S560 38 620 22" />
            <text x="20" y="224">Class 5</text>
            <text x="620" y="224" textAnchor="end">Class 11</text>
          </svg>
          <div className="legend">
            <span><b>Solid line:</b> steady learning over the years</span>
            <span><b>Dashed line:</b> the last-minute rush</span>
          </div>
        </div>
      </div>
    </header>
  );
}
