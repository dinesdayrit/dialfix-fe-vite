import { useGetProvider } from "@/api/ServiceProvidersApi";
import { useParams } from "react-router-dom";
import { ServiceItem } from "@/types"; // Adjust the path to your types if needed
import { Dot } from "lucide-react";

export default function ServicesDetails() {
  const { serviceProviderId } = useParams<{ serviceProviderId: string }>();
  const { isLoading, serviceProvider } = useGetProvider(serviceProviderId);

  if (isLoading) return <div>Loading...</div>;
  if (!serviceProvider) return <div>No service provider found.</div>;

  return (
    <div>
      {serviceProvider.serviceItems.map((item: ServiceItem) => (
        <div key={item._id} className="p-2">
          <h3 className="font-bold flex">
            <Dot />
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
