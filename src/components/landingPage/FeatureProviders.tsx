import useGetLocation from "@/api/GetLocation";
import { useSearchProviders } from "@/api/ServiceProvidersApi";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import SearchResultsCard from "../searchPage/SearchResultsCard";

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
    data
  );

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <div className="bg-pink-100">
      <div className="container p-10">
        <h1 className="text-3xl font-semibold text-gray-600">
          Book your trusted Service Provider in {data}!
        </h1>

        <Link
          to={`/search-service-provider/${data}`}
          className="text-blue-600 hover:underline"
        >
          See All Service Provider in {data}
        </Link>

        <div className="grid md:grid-cols-3 gap-2 mt-10">
          {isLoading ? (
            <Spinner text="Getting Provider in your location" />
          ) : (
            <>
              {!results?.data?.length ? (
                <>No Providers found</>
              ) : (
                results.data
                  .slice(0, 3)
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
