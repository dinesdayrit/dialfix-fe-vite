import {
  useCreateMyServices,
  useGetMyServices,
  useUpdateMyServices,
} from "@/api/MyServicesApi";
import Spinner from "@/components/Spinner";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";
import { useEffect } from "react";

export default function ManageServicesPage() {
  const {
    services,
    isLoading: isGetLoading,
    refetch: refetchServices,
  } = useGetMyServices();
  const {
    mutate: createService,
    isPending: isCreateLoading,
    isSuccess: isCreateSuccess,
  } = useCreateMyServices();
  const {
    mutate: updateService,
    isPending: isUpdateLoading,
    isSuccess: isUpdateSuccess,
  } = useUpdateMyServices();

  useEffect(() => {
    refetchServices();
  }, [isUpdateSuccess, isCreateSuccess]);

  const isEditing = !!services;
  if (isGetLoading) {
    return <Spinner text="Getting Services.." />;
  }

  return (
    <div className="container pt-10">
      <ManageServicesForm
        services={services}
        onSave={isEditing ? updateService : createService}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </div>
  );
}
