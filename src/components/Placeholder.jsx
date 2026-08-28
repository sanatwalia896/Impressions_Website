import "./Placeholder.css";

// Renders a real <img> if `src` is given, otherwise a labeled color block
// so you can see the layout before dropping in photos. Put real images in
// /public/images and pass src="/images/your-file.jpg".
export default function Placeholder({ src, alt = "", label, tone = "sand", className = "" }) {
  if (src) {
    return <img src={src} alt={alt} className={`placeholder-img ${className}`} />;
  }
  return (
    <div className={`placeholder tone-${tone} ${className}`}>
      <span className="placeholder-label">{label || alt}</span>
    </div>
  );
}
