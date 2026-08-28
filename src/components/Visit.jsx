import { VISIT } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Visit.css";

export default function Visit() {
  const revealRef = useReveal();

  return (
    <section id="visit" className="visit" ref={revealRef}>
      <div className="visit-inner">
        <p className="eyebrow">{VISIT.eyebrow}</p>
        <h2 className="section-title">{VISIT.title}</h2>
        {VISIT.details.map((d) => (
          <p className="visit-detail" key={d}>
            {d}
          </p>
        ))}
        <div className="visit-links">
          {VISIT.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="visit-map">
        <iframe
          title="Impressions store location"
          src={VISIT.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
