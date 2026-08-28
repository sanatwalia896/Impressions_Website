import useScrollProgress from "../hooks/useScrollProgress.js";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-fill" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
