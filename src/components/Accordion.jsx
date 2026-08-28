import { useState } from "react";
import { WHY_ITEMS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Accordion.css";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const revealRef = useReveal();

  return (
    <section className="accordion-section" ref={revealRef}>
      <div className="section-head">
        <p className="eyebrow">Why Impressions</p>
        <h2 className="section-title">What we bring to the table</h2>
      </div>

      <div className="accordion">
        {WHY_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={`accordion-item ${isOpen ? "open" : ""}`} key={item.title}>
              <button
                className="accordion-head"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="accordion-number">
                  {String(i + 1).padStart(2, "0")}. {item.title}
                </span>
                <span className="accordion-icon">{isOpen ? "–" : "+"}</span>
              </button>
              <div className="accordion-body" style={{ maxHeight: isOpen ? "200px" : "0px" }}>
                <p>{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
