import { useState } from "react";
import { NAV_LINKS } from "../data/content.js";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrap">
      <header className="nav">
        <a href="#top" className="nav-mark">
          Impressions
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </header>
    </div>
  );
}
