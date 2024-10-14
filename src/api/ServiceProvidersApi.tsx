import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useFetchAllServiceProviders = () => {
  const fetchAllServiceProviders = async () => {
    const response = await fetch(`${API_BASE_URL}/service-providers`);

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
