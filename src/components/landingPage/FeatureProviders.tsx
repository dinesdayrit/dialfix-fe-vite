import useGetLocation from "@/api/GetLocation";
import { useSearchProviders } from "@/api/ServiceProvidersApi";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import SearchResultsCard from "../searchPage/SearchResultsCard";
import { ArrowUpRight } from "lucide-react";

export default function FeatureProviders() {
  const { data } = useGetLocation();

  // Define a default searchState object with minimum required fields
  const defaultSearchState = {
    searchQuery: "",
    page: 1,
    selectedSectors: [],
  };

  // Pass both `defaultSearchState` and `data` to useSearchProviders
  const { results, isLoading, refetch } = useSearchProviders(
    defaultSearchState,
    data?.city
  );

  useEffect(() => {
    if (data?.city) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <div className="bg-cyan-100 py-24">
      <div className="container">
        <h1 className="text-3xl font-semibold text-gray-600">
          Book your trusted Service Provider in {data?.city}!
        </h1>

        <Link
          to={`/search-service-provider/${data}`}
          className="text-blue-600 hover:underline flex"
        >
          Your Location {data?.formatted} <ArrowUpRight />
        </Link>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {isLoading ? (
            <Spinner text="Getting Provider in your location" />
          ) : (
            <>
              {!results?.data?.length ? (
                <span className="flex md:items-center md:justify-center">
                  No Providers found:
                  <Link
                    to="/search-service-provider"
                    className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
                  >
                    Check Providers on other city
                  </Link>
                </span>
              ) : (
                results.data
                  .slice(0, 4)
                  .map((provider) => (
                    <SearchResultsCard serviceProviders={provider} />
                  ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
