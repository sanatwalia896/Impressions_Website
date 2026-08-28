import "./WhatsAppButton.css";

// Update the phone number below to your real WhatsApp Business number,
// international format, no + or spaces (e.g. 91XXXXXXXXXX).
const PHONE_NUMBER = "91XXXXXXXXXX";
const MESSAGE = "Hi! I'd like to know more about Impressions.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      className="whatsapp-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Impressions on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.508 3.58 1.393 5.06L2 22l5.09-1.362A9.94 9.94 0 0 0 12 22c5.523 0 10-4.478 10-10S17.523 2 12 2zm0 18.111a8.09 8.09 0 0 1-4.13-1.13l-.296-.176-3.02.808.807-2.945-.193-.303A8.08 8.08 0 0 1 3.889 12c0-4.472 3.639-8.111 8.112-8.111S20.11 7.528 20.11 12 16.474 20.111 12 20.111z" />
      </svg>
    </a>
  );
}
