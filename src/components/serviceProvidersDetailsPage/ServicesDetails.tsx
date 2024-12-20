import { ServiceItem } from "@/types";
import { Dot } from "lucide-react";

type Props = {
  isLoading: boolean;
  serviceProvider: {
    serviceProviderAbout: string;
    serviceItems: ServiceItem[];
    officeHours?: string;
  } | null;
};

export default function ServicesDetails({ isLoading, serviceProvider }: Props) {
  if (isLoading) return <div>Loading...</div>;
  if (!serviceProvider) return <div>No service provider found.</div>;

  return (
    <div>
      <div className="border-b-2 p-2 mb-8">
        <p className="font-bold mb-2">About</p>
        <p>{serviceProvider.serviceProviderAbout}</p>
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
        {serviceProvider.officeHours?.split("\r\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
