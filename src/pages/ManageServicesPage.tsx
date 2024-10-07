import {
  useCreateMyServices,
  useGetMyServices,
  useUpdateMyServices,
} from "@/api/MyServicesApi";
import Spinner from "@/components/Spinner";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";

export default function ManageServicesPage() {
  const { mutate: createService, isPending: isCreateLoading } =
    useCreateMyServices();
  const { services, isLoading: isGetLoading } = useGetMyServices();
  const { mutate: updateService, isPending: IsUpdateLoading } =
    useUpdateMyServices();

  const isEditing = !!services;
  if (isGetLoading) {
    return <Spinner text="Getting Services.." />;
  }

  return (
    <div>
      <ManageServicesForm
        services={services}
        onSave={isEditing ? updateService : createService}
        isLoading={isCreateLoading || IsUpdateLoading}
      />
    </div>
  );
}
