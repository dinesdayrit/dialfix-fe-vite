import useGetLocation from "@/api/GetLocation";
import About from "@/components/homePage/About";
import Brands from "@/components/homePage/Brands";
import Faq from "@/components/homePage/Faq";
import FeatureProviders from "@/components/homePage/FeatureProviders";
import Hero from "@/components/homePage/Hero";
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
