import Page from "./Page";
import CookieConsent from "./components/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <>
      <Page />
      <CookieConsent />
      <SpeedInsights />
    </>
  );
}
