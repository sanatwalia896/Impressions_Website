import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder.jsx";
import "./MediaStack.css";

/**
 * MediaStack — a deck of images stacked on top of each other. The front
 * image is fully visible; the rest peek out behind it, offset and
 * slightly rotated.
 *
 * You can move through the deck three ways:
 *   - swipe left/right (touch — phones/tablets)
 *   - scroll/trackpad horizontal gesture (laptop trackpads, Magic Mouse)
 *   - click a card edge, an arrow, or a dot (mouse, any device)
 *
 * Reuse this anywhere you have more than one image for one visual slot:
 * hero collages, category media, "before/after" pairs, etc.
 *
 * Props:
 *   items       array of { src, alt, label, tone } — same shape Placeholder
 *               accepts. `src: null` shows a labeled color block.
 *   autoRotate  optional, default false — advances automatically
 *   interval    optional ms between auto-advances, default 3500
 *   height      optional CSS height for the stack, e.g. "460px".
 *               Falls back to whatever height the parent gives it.
 *
 * Example:
 *   <MediaStack
 *     items={[
 *       { src: "/images/hero-main.jpg", alt: "Indo-western look" },
 *       { src: "/images/hero-detail.jpg", alt: "Detail shot" },
 *       { src: null, label: "Add a third image here", tone: "plum" },
 *     ]}
 *     autoRotate
 *     height="460px"
 *   />
 */
export default function MediaStack({ items, autoRotate = false, interval = 3500, height }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const wheelLockRef = useRef(false);
  const touchStartRef = useRef(null);
  const count = items.length;

  function next() {
    setIndex((i) => (i + 1) % count);
  }
  function prev() {
    setIndex((i) => (i - 1 + count) % count);
  }

  useEffect(() => {
    if (!autoRotate || count <= 1) return undefined;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRotate, interval, count]);

  function pause() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  // --- laptop / trackpad: horizontal scroll gesture ---
  function handleWheel(e) {
    if (count <= 1) return;
    // ignore mostly-vertical scrolling so the page still scrolls normally
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (wheelLockRef.current) return;

    const threshold = 12;
    if (e.deltaX > threshold) {
      next();
    } else if (e.deltaX < -threshold) {
      prev();
    } else {
      return;
    }
    // brief lock so one gesture doesn't fire a dozen index changes
    wheelLockRef.current = true;
    setTimeout(() => {
      wheelLockRef.current = false;
    }, 350);
  }

  // --- phone / tablet: touch swipe ---
  function handleTouchStart(e) {
    touchStartRef.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartRef.current === null || count <= 1) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current;
    touchStartRef.current = null;
    const threshold = 40;
    if (deltaX < -threshold) next();
    else if (deltaX > threshold) prev();
  }

  if (!count) return null;

  return (
    <div
      className="media-stack"
      style={height ? { height } : undefined}
      onMouseEnter={pause}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {items.map((item, i) => {
        // distance from the front card, wrapping around the deck
        const pos = (i - index + count) % count;
        return (
          <button
            key={i}
            type="button"
            className="media-stack-card"
            style={{ "--pos": pos }}
            onClick={() => setIndex(i)}
            aria-label={pos === 0 ? undefined : `Show image ${i + 1} of ${count}`}
            aria-current={pos === 0}
          >
            <Placeholder {...item} />
          </button>
        );
      })}

      {count > 1 && (
        <div className="media-stack-controls">
          <button type="button" className="media-stack-arrow" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <div className="media-stack-dots">
            {items.map((_, i) => (
              <span
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" className="media-stack-arrow" onClick={next} aria-label="Next image">
            ›
          </button>
        </div>
      )}

      {count > 1 && <span className="media-stack-hint">swipe / scroll for more</span>}
    </div>
  );
}
