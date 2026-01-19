import { sitecopy } from "./sitecopy";

export default function HomeVideo() {
  const { homeVideo } = sitecopy;

  return (
    <section className="homeVideo" id="home-video">
      <h2>{homeVideo.title}</h2>

      <div className="homeVideoCard">
        <div className="homeVideoImageWrapper">
          <img src={homeVideo.image} alt={homeVideo.productTitle} className="homeVideoImage" width="300" height="450" loading="lazy" />
        </div>
        
        <div className="homeVideoContent">
          <h3 className="homeVideoProductTitle">{homeVideo.productTitle}</h3>
          <p className="homeVideoDescription">{homeVideo.description}</p>
          
          <a 
            href={homeVideo.cta.href} 
            target={homeVideo.cta.target}
            rel="noopener noreferrer"
            className="homeVideoCta"
          >
            {homeVideo.cta.label}
          </a>
          
          <p className="homeVideoDisclaimer">{homeVideo.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
