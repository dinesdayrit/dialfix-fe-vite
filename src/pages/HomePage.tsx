import useGetLocation from "@/api/GetLocation";
import About from "@/components/landingPage/About";
import Brands from "@/components/landingPage/Brands";
import Faq from "@/components/landingPage/Faq";
import FeatureProviders from "@/components/landingPage/FeatureProviders";
import Hero from "@/components/landingPage/Hero";
import Spinner from "@/components/Spinner";

export default function HomePage() {
  const { isLoading } = useGetLocation();

  if (isLoading) {
    return <Spinner text="getting your location" />;
  }
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
