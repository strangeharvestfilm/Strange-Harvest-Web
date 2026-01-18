import { useState, useEffect } from "react";
import { sitecopy } from "./sitecopy";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { cookieConsent } = sitecopy;

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    
    // Here you would initialize your tracking scripts
    // Example: loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookieConsentOverlay" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-message">
      <div className="cookieConsentBanner">
        <div className="cookieConsentContent">
          <h3 id="cookie-title" className="cookieConsentTitle">
            {cookieConsent.title}
          </h3>
          <p id="cookie-message" className="cookieConsentMessage">
            {cookieConsent.message}{" "}
            <a
              href={cookieConsent.privacyLink.href}
              className="cookieConsentPrivacyLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cookieConsent.privacyLink.label}
            </a>
          </p>
        </div>
        <div className="cookieConsentActions">
          <button
            onClick={handleDecline}
            className="cookieConsentButton cookieConsentDecline"
            aria-label="Decline cookies"
          >
            {cookieConsent.declineButton}
          </button>
          <button
            onClick={handleAccept}
            className="cookieConsentButton cookieConsentAccept"
            aria-label="Accept cookies"
          >
            {cookieConsent.acceptButton}
          </button>
        </div>
      </div>
    </div>
  );
}
