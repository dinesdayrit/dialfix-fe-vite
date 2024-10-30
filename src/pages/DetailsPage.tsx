import { useGetProvider } from "@/api/ServiceProvidersApi";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
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
    <div className="container flex flex-col gap-6 pb-8">
      <AspectRatio ratio={16 / 5}>
        <img
          src={serviceProvider.imageUrl}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      <div className="flex flex-col">
        <h1 className="text-3xl">{serviceProvider.serviceProviderName}</h1>
        <p>
          {serviceProvider.city}, {serviceProvider.country}
        </p>
        <label className="mt-6"> Service Offers:</label>
        <ul className="outline rounded-md">
          {serviceProvider.serviceItems.map((service, index) => (
            <li key={index} className="p-4 grid grid-cols-2">
              {service.name}{" "}
              <Button className="bg-blue-600 hover:bg-blue-600/90">
                Book For Appointment
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
