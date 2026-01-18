import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Synopsis from "./src/components/Synopsis";
import Trailer from "./src/components/Trailer";
import Watch from "./src/components/Watch";
import Merch from "./src/components/Merch";
import Press from "./src/components/Press";
import CastCrew from "./src/components/CastCrew";
import Footer from "./src/components/Footer";

export default function Home() {
  return (
    <main>
      <p style={{ color: "red" }}>PAGE LOADED</p>
      <Header />
      <Hero />
      <Synopsis />
      <Trailer />
      <Watch />
      <Merch />
      <Press />
      <CastCrew />
      <Footer />
    </main>
  );
}
