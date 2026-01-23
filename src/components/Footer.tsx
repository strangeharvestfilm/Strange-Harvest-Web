import { sitecopy } from "./sitecopy";

export default function Footer() {
  const { footer } = sitecopy;

  return (
    <footer className="siteFooter">
      <div className="footerContent">
        <h2 className="footerTitle">{footer.title}</h2>
        <p className="footerTagline">{footer.tagline}</p>
        
        <div className="footerSocials">
          <a href="https://www.rottentomatoes.com/m/strange_harvest" target="_blank" rel="noreferrer" aria-label="Rotten Tomatoes">
            <img src="/images/still-icon-tomato.webp" alt="Rotten Tomatoes" className="socialIcon" />
          </a>
          <a href="https://www.instagram.com/strangeharvestmovie/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src="/images/still-icon-instagram.webp" alt="Instagram" className="socialIcon" />
          </a>
          <a href="https://www.facebook.com/Strangeharvestmovie/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src="/images/still-icon-facebook.webp" alt="Facebook" className="socialIcon" />
          </a>
          <a href="https://x.com/Strange_Harvest" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <img src="/images/still-icon-twitter.webp" alt="X (Twitter)" className="socialIcon noFilter" />
          </a>
          <a href="https://www.youtube.com/@strangeharvestfilm" target="_blank" rel="noreferrer" aria-label="YouTube">
            <img src="/images/still-icon-youtube2.webp" alt="YouTube" className="socialIcon" />
          </a>
        </div>

        <div className="footerBottom">
          <p className="footerCopyright">{footer.copyright}</p>
          <p className="footerMusic">{footer.musicCredit}</p>
        </div>
      </div>
    </footer>
  );
}
