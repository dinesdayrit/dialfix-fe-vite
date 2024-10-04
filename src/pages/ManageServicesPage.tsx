import { useCreateMyServices, useGetMyServices } from "@/api/MyServicesApi";
import Spinner from "@/components/Spinner";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";

export default function ManageServicesPage() {
  const mutation = useCreateMyServices();
  const { mutateAsync: createService } = mutation;
  const { services, isLoading: isGetLoading } = useGetMyServices();

  if (isGetLoading) {
    return <Spinner text="Getting Services.." />;
  }

  return (
    <div>
      <ManageServicesForm services={services} onSave={createService} />
    </div>
  );
}
