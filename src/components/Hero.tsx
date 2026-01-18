import { sitecopy } from "./sitecopy";

export default function Hero() {
  const { hero } = sitecopy;

  return (
    <section className="hero" id="top">
      <div className="heroGrid">
        <div className="heroPoster">
          <img
            src="/images/still-strange-harvest-poster.jpg"
            alt="Strange Harvest Poster"
            loading="eager"
          />
        </div>

        <div className="heroCopy">
          <div className="heroKicker">{hero.tagline}</div>
          <h1>{hero.title}</h1>

          <p>
            A routine welfare check leads to a gruesome discovery — and the return of a killer
            thought gone forever.
          </p>

          <div className="ctaRow">
            <a className="cta primary" href={hero.ctas.primary.href}>
              {hero.ctas.primary.label}
            </a>
            <a className="cta" href={hero.ctas.secondary.href}>
              {hero.ctas.secondary.label}
            </a>
            <a className="cta" href={hero.ctas.tertiary.href}>
              {hero.ctas.tertiary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}