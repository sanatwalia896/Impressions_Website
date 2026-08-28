import "./Timeline.css";

// Thin wrapper that just draws the vertical line running behind the
// category dots. The dots themselves live inside CategorySection.
export default function Timeline({ children }) {
  return <div className="timeline">{children}</div>;
}
