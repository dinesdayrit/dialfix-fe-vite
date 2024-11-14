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

        <div className="mt-2 border shadow-md">
          <ServicesDetailsCard />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full shadow-2xl py-8 px-6 rounded-md flex justify-center items-center bg-white z-50">
        <div className="max-w-4xl w-full flex justify-between">
          <div>
            <p>Php 500</p>
            <p>Tue, Mar 12 - 8:00 AM</p>
          </div>
          <Button className=" tracking-widest rounded-full w-1/3 bg-green-600 hover:bg-green-600/90">
            +BOOK
          </Button>
        </div>
      </div>
    </div>
  );
}
