"use client";

import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }

  return (
    <nav className="site-nav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top">thinketh</a>
        <div className="nav-links">
          <a href="#why">Why</a>
          <a href="#skills">What we teach</a>
          <a href="#courses">Courses</a>
          <a href="#assessment">Assessment</a>
          <a href="#team">Team</a>
          <a href="#contribute">Contribute</a>
          <a className="btn small" href="#connect">Talk to us</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Switch light or dark theme">◐</button>
        </div>
      </div>
    </nav>
  );
}
