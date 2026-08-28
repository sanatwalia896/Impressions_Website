import { LOOKBOOK_ITEMS } from "../data/content.js";
import Placeholder from "./Placeholder.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Lookbook.css";

export default function Lookbook() {
  const revealRef = useReveal();

  return (
    <section id="lookbook" className="lookbook" ref={revealRef}>
      <div className="section-head">
        <p className="eyebrow">The lookbook</p>
        <h2 className="section-title">Styled by Impressions</h2>
        <p className="section-sub">
          A running edit of looks, shot and styled for the way our customers actually get
          dressed.
        </p>
      </div>

      <div className="lookbook-fan">
        {LOOKBOOK_ITEMS.map((item, i) => (
          <div className="fan-card" key={i} style={{ "--i": i }}>
            <Placeholder {...item} className="p-look" />
          </div>
        ))}
      </div>

      {/* simple grid fallback shown on small screens via CSS */}
      <div className="lookbook-grid">
        {LOOKBOOK_ITEMS.map((item, i) => (
          <Placeholder key={i} {...item} className="p-look" />
        ))}
      </div>
    </section>
  );
}
