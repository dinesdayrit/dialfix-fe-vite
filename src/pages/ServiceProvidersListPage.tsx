import { useFetchAllServiceProviders } from "@/api/ServiceProvidersApi";
import Spinner from "@/components/Spinner";

export default function ServiceProvidersListPage() {
  const { serviceProviders, isLoading, error } = useFetchAllServiceProviders();

  if (isLoading) return <Spinner text="Getting Providers" />;
  if (error) return <p>Error fetching service providers</p>;

  return (
    <ul>
      {serviceProviders?.map((provider: any) => (
        <li key={provider._id}>{provider.serviceProviderName}</li>
      ))}
    </ul>
  );
}
