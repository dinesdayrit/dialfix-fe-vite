import { useSearchProviders } from "@/api/ServiceProvidersApi";
import PaginationSelector from "@/components/searchPage/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultsCard from "@/components/searchPage/SearchResultsCard";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ServiceProvidersInfo from "@/components/searchPage/ServiceProvidersInfo";
import ServiceSectorFilter from "@/components/searchPage/ServiceSectorFilter";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedSectors: string[];
};

export default function SearchPage() {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedSectors: [],
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { results, isLoading } = useSearchProviders(searchState, city);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSelectedSectors = (selectedSectors: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedSectors,
      page: 1,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  if (isLoading) return <Spinner text="Getting Providers" />;
  if (!results?.data || !city) {
    return (
      <span className="flex items-center justify-center mt-5">
        No service providers found on your location: <br />
        <Link
          to="/search-service-provider"
          className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change location
        </Link>
      </span>
    );
  }

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 pt-10">
      <div>
        <ServiceSectorFilter
          selectedSectors={searchState.selectedSectors}
          onChange={setSelectedSectors}
          isExpanded={isExpanded}
          onExpandedClick={() =>
            setIsExpanded((prevIsExpanded) => !prevIsExpanded)
          }
        />
      </div>

      <div className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          placeHolder="Search Service Provider"
          onSubmit={setSearchQuery}
        />
        <ServiceProvidersInfo total={results.pagination.total} city={city} />
        {results.data.map((providers) => (
          <SearchResultsCard serviceProviders={providers} />
        ))}
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
