import About from "@/components/landingPage/About";
import Brands from "@/components/landingPage/Brands";
import Faq from "@/components/landingPage/Faq";
import FeatureProviders from "@/components/landingPage/FeatureProviders";
import Hero from "@/components/landingPage/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <FeatureProviders />
      <About />
      <Faq />
    </>
  );
}
