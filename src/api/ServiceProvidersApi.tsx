import { SearchState } from "@/pages/SearchPage";
import { ProvidersSearchResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useFetchAllServiceProviders = () => {
  const fetchAllServiceProviders = async () => {
    const response = await fetch(`${API_BASE_URL}/api/serviceProviders`);

    if (!response.ok) {
      throw new Error("Failed to fetch service providers");
    }

    return response.json();
  };
  const {
    data: serviceProviders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchCurrentUser"],
    queryFn: fetchAllServiceProviders,
  });

  return {
    serviceProviders,
    isLoading,
    error,
  };
};

export const useSearchProviders = (searchState: SearchState, city?: string) => {
  const createSearchRequest = async (): Promise<ProvidersSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedSectors", searchState.selectedSectors.join(","));

    const response = await fetch(
      `${API_BASE_URL}/api/serviceProviders/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get providers");
    }
    console.log(response);
    return response.json();
  };

  const {
    data: results,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchProviders", searchState],
    queryFn: createSearchRequest,
    enabled: !!city,
  });

  return {
    results,
    isLoading,
    error,
  };
};
