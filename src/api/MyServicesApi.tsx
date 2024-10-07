import { Services } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyServices = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyServicesRequest = async (): Promise<Services> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/services`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No services Found. Add your Services");
    }

    return response.json();
  };

  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchservices"],
    queryFn: getMyServicesRequest,
  });

  if (error) {
    toast.error(error.toString());
  }
  return { services, isLoading };
};

// Hook to create a new user

export const useCreateMyServices = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyServicesRequest = async (
    servicesFormData: FormData
  ): Promise<Services> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/services`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: servicesFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create service provider");
    }
    return response.json();
  };

  const mutation = useMutation({ mutationFn: createMyServicesRequest });

  if (mutation.isSuccess) {
    toast.success("Vendor created!");
  }

  if (mutation.isError) {
    toast.error("Unable to create vendor");
  }

  return mutation;
};
