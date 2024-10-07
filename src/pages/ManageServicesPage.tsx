import { useCreateMyServices, useGetMyServices } from "@/api/MyServicesApi";
import Spinner from "@/components/Spinner";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";

export default function ManageServicesPage() {
  const { mutateAsync: createService, isPending: isCreateLoading } =
    useCreateMyServices();
  const { services, isLoading: isGetLoading } = useGetMyServices();

  if (isGetLoading) {
    return <Spinner text="Getting Services.." />;
  }

  return (
    <div>
      <ManageServicesForm
        services={services}
        onSave={createService}
        isLoading={isCreateLoading}
      />
    </div>
  );
}
