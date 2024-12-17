import useGetLocation from "@/api/GetLocation";
import About from "@/components/homePage/About";
import Brands from "@/components/homePage/Brands";
import Faq from "@/components/homePage/Faq";
import FeatureProviders from "@/components/homePage/FeatureProviders";
import Hero from "@/components/homePage/Hero";
import Spinner from "@/components/Spinner";

export default function HomePage() {
  const { data } = useGetLocation();

  const isLoading = !data?.city;
  return (
    <>
      <>
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <Spinner />
          </div>
        )}
        <Hero />
        <Brands />
        <FeatureProviders />
        <About />
        <Faq />
      </>
    </>
  );
}
