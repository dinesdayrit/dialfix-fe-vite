import { useSearchProviders } from "@/api/ServiceProvidersApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultsCard from "@/components/SearchResultsCard";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

export default function SearchPage() {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  const { results, isLoading } = useSearchProviders(searchState, city);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
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
        No results found: <br />
        <Link
          to="/"
          className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change location
        </Link>
      </span>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mx-12">
      <div>service sectors</div>

      <div className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          placeHolder="Search Service Provider"
          onSubmit={setSearchQuery}
        />
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
