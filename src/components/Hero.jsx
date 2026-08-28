import { useRef } from "react";
import { HERO } from "../data/content.js";
import MediaStack from "./MediaStack.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Hero.css";

export default function Hero() {
  const revealRef = useReveal();
  const collageRef = useRef(null);

  // gentle cursor-follow drift on the whole deck, desktop only
  function handleMouseMove(e) {
    const node = collageRef.current;
    if (!node || window.innerWidth < 860) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--px", x.toFixed(3));
    node.style.setProperty("--py", y.toFixed(3));
  }

  function handleMouseLeave() {
    const node = collageRef.current;
    if (!node) return;
    node.style.setProperty("--px", 0);
    node.style.setProperty("--py", 0);
  }

  return (
    <section id="top" className="hero">
      <div className="hero-copy" ref={revealRef}>
        <p className="eyebrow">{HERO.eyebrow}</p>
        <h1 className="hero-title">{HERO.title}</h1>
        <p className="hero-sub">{HERO.subtitle}</p>
        <a className="btn" href={HERO.ctaHref}>
          {HERO.ctaLabel}
        </a>
      </div>

      <div
        className="hero-collage"
        ref={collageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <MediaStack items={HERO.images} height="100%" />
      </div>
    </section>
  );
}
