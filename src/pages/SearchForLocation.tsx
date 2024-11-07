import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function SearchForLocation() {
  const navigate = useNavigate();

  const handleSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search-service-provider/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div>
      <SearchBar placeHolder="Search by City or Town" onSubmit={handleSubmit} />
    </div>
  );
}
