import SearchBar, { SearchForm } from "@/components/SearchBar";

export default function SearchForLocation() {
  const handleSubmit = (searchFormValues: SearchForm) => {
    window.location.assign(
      `/search-service-provider/${searchFormValues.searchQuery}`
    );
  };
  return (
    <div className="container p-10">
      <p className="mb-2 text-lg">Your Location:</p>
      <SearchBar placeHolder="Search by City or Town" onSubmit={handleSubmit} />
    </div>
  );
}
