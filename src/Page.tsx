import Header from "./components/Header";
import Hero from "./components/Hero";
import Synopsis from "./components/Synopsis";
import Trailer from "./components/Trailer";
import Watch from "./components/Watch";
import HomeVideo from "./components/HomeVideo";
import Merch from "./components/Merch";
import Press from "./components/Press";
import CastCrew from "./components/CastCrew";
import Footer from "./components/Footer";
import SymbolDivider from "./components/SymbolDivider";


export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SymbolDivider />
        <Synopsis />
        <SymbolDivider />
        <Trailer />
        <SymbolDivider />
        <Watch />
        <SymbolDivider />
        <HomeVideo />
        <SymbolDivider />
        <Merch />
        <SymbolDivider />
        <Press />
        <SymbolDivider />
        <CastCrew />
      </main>
      <Footer />
    </>
  );
}
