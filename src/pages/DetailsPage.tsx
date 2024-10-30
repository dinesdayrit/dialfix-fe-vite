import { useGetProvider } from "@/api/ServiceProvidersApi";
import Spinner from "@/components/Spinner";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { serviceProviderId } = useParams();
  const { isLoading, serviceProvider } = useGetProvider(serviceProviderId);

  if (isLoading) {
    return <Spinner />;
  }

  if (!serviceProvider) {
    return <p>Service provider not found.</p>;
  }

  return (
    <div>
      <h1>{serviceProvider.imageUrl}</h1>
      <p>{serviceProvider.serviceProviderName}</p>
    </div>
  );
}
