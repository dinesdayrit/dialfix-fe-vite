import { useFetchAllServiceProviders } from "@/api/ServiceProvidersApi";
import SearchBar from "@/components/SearchBar";
import Spinner from "@/components/Spinner";

export default function ServiceProvidersListPage() {
  const { serviceProviders, isLoading, error } = useFetchAllServiceProviders();

  if (isLoading) return <Spinner text="Getting Providers" />;
  if (error) return <p>Error fetching service providers</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mx-12">
      <div>service sectors</div>

      <div className="flex flex-col gap-5">
        <SearchBar />
        <ul>
          {serviceProviders?.map((provider: any) => (
            <li key={provider._id}>{provider.serviceProviderName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
