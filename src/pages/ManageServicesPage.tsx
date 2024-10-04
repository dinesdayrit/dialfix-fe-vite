import { useCreateMyServices } from "@/api/MyServicesApi";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";

export default function ManageServicesPage() {
  const mutation = useCreateMyServices();
  const { mutateAsync: createService } = mutation;

  return (
    <div>
      <ManageServicesForm onSave={createService} />
    </div>
  );
}
