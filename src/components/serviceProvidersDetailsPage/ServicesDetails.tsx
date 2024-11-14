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
      <div className="border-b-2 p-2 mb-8">
        <p className="font-bold mb-2">About</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="border-b-2 mb-8">
        <p className="font-bold mb-2">Services Offers</p>
        {serviceProvider.serviceItems.map((item: ServiceItem) => (
          <div key={item._id} className="p-2">
            <h3 className="font-bold flex">
              <Dot />
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="border-b-2 mb-8 p-2">
        <p className="font-bold mb-2">Office Hours</p>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}