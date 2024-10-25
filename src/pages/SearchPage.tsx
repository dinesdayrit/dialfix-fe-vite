import { useFetchAllServiceProviders } from "@/api/ServiceProvidersApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultsCard from "@/components/SearchResultsCard";
import Spinner from "@/components/Spinner";
import { useState } from "react";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

export default function SearchPage() {
  const { serviceProviders, isLoading, error } = useFetchAllServiceProviders();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  if (isLoading) return <Spinner text="Getting Providers" />;
  if (error) return <p>Error fetching service providers</p>;

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mx-12">
      <div>service sectors</div>

      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          placeHolder="Search Service Provider"
          onSubmit={setSearchQuery}
        />

        <SearchResultsCard serviceProviders={serviceProviders} />
      </div>
    </div>
  );
}
