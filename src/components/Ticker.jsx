import { TICKER_ITEMS } from "../data/content.js";
import "./Ticker.css";

export default function Ticker() {
  // duplicated so the CSS animation can loop seamlessly
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
            <span className="ticker-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
