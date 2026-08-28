import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>Impressions</span>
      <span>© {new Date().getFullYear()} — multi-brand ladies showroom</span>
    </footer>
  );
}
