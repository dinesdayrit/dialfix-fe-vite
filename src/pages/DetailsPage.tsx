import { useGetProvider } from "@/api/ServiceProvidersApi";
import ServicesDetailsCard from "@/components/serviceProvidersDetailsPage/ServicesDetailsCard";
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
    <div className="container flex flex-col gap-6 pt-10 mb-10">
      <AspectRatio ratio={16 / 5}>
        <img
          src={serviceProvider.imageUrl}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      <div className="flex flex-col">
        <h1 className="text-3xl">{serviceProvider.serviceProviderName}</h1>
        <p className="text-slate-500">
          {serviceProvider.addressLine1} <br />
          {serviceProvider.city}, {serviceProvider.country}
        </p>

        <div className="mt-2 border">
          <ServicesDetailsCard />
        </div>
      </div>
    </div>
  );
}
