import useReveal from "../hooks/useReveal.js";
import "./BigStatement.css";

export default function BigStatement() {
  const revealRef = useReveal();

  return (
    <section className="statement" ref={revealRef}>
      <p className="eyebrow">Ready when you are</p>
      <h2 className="ghost-text statement-text">Let's get you dressed</h2>
      <a className="btn statement-btn" href="#visit">
        Find the store
      </a>
    </section>
  );
}
