import { INTRO_TEXT } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Intro.css";

export default function Intro() {
  const revealRef = useReveal();

  return (
    <section className="intro">
      <p ref={revealRef}>{INTRO_TEXT}</p>
    </section>
  );
}
