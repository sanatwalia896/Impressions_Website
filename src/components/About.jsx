import { ABOUT } from "../data/content.js";
import Placeholder from "./Placeholder.jsx";
import useReveal from "../hooks/useReveal.js";
import "./About.css";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="about" ref={revealRef}>
      <Placeholder {...ABOUT.image} label="Store front / founder portrait" className="p-about" />

      <div className="about-copy">
        <p className="eyebrow">{ABOUT.eyebrow}</p>
        <h2 className="section-title">{ABOUT.title}</h2>
        {ABOUT.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
