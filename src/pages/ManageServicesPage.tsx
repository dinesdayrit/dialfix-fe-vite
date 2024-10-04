import { useCreateMyServices, useGetMyServices } from "@/api/MyServicesApi";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";

export default function ManageServicesPage() {
  const mutation = useCreateMyServices();
  const { mutateAsync: createService } = mutation;
  const { services } = useGetMyServices();

  return (
    <div>
      <ManageServicesForm services={services} onSave={createService} />
    </div>
  );
}
