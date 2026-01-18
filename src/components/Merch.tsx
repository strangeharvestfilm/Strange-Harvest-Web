import { sitecopy } from "./sitecopy";
import { useState, useEffect } from "react";

export default function Merch() {
  const { merch } = sitecopy;
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Show fallback after 5 seconds if iframe hasn't loaded properly
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="merch" id="shop">
      <h2>{merch.title}</h2>
      <p className="merchBlurb">{merch.blurb}</p>
      
      {showFallback ? (
        <div className="merchComingSoon">
          <div className="comingSoonContent">
            <h3>Merch Coming Soon</h3>
            <p>Our merchandise store is currently being updated. Check back soon!</p>
            <a 
              href={merch.shopifyUrl} 
              target="_blank" 
              rel="noreferrer"
              className="cta primary"
              style={{ marginTop: '24px', display: 'inline-block' }}
            >
              Visit Store Directly
            </a>
          </div>
        </div>
      ) : (
        <div className="merchStoreWrapper">
          <iframe
            src={merch.shopifyUrl}
            className="merchStoreIframe"
            title="Strange Harvest Merchandise Store"
            frameBorder="0"
            scrolling="yes"
            onLoad={() => setShowFallback(false)}
          />
          <div className="merchStoreFallbackLink">
            <a href={merch.shopifyUrl} target="_blank" rel="noreferrer">
              Having trouble viewing the store? Click here to open in a new window →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
