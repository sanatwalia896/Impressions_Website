import MediaStack from "./MediaStack.jsx";
import useReveal from "../hooks/useReveal.js";
import "./CategorySection.css";

export default function CategorySection({
  index,
  eyebrow,
  title,
  description,
  points,
  tone,
  reverse,
  images,
}) {
  const revealRef = useReveal();

  // give each image in this category its own tone/label if it doesn't
  // already have one, so you can just push more into the array in
  // content.js without repeating tone/label every time
  const items = (images || []).map((img, i) => ({
    tone,
    label: i === 0 ? `${title} — hero image` : "Detail / texture",
    ...img,
  }));

  return (
    <section className={`category ${reverse ? "reverse" : ""}`} ref={revealRef}>
      <div className="category-media">
        <MediaStack items={items} height="100%" />
      </div>

      <div className="category-track">
        <span className={`category-dot tone-dot-${tone}`}>{index}</span>
      </div>

      <div className="category-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className={`category-title tone-text-${tone}`}>{title}</h2>
        <p className="category-desc">{description}</p>
        <ul className="category-points">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
