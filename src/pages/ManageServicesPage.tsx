import {
  useCreateMyServices,
  useGetMyServices,
  useGetMyServicesAppointments,
  useUpdateMyServices,
} from "@/api/MyServicesApi";
import Spinner from "@/components/Spinner";
import { Tabs } from "@/components/ui/tabs";
import ManageServicesForm from "@/forms/manage-services-form/ManageServicesForm";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import MyServicesAppointmentCard from "@/components/manage-servicesPage/MyServicesAppointmentCard";

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
  const { servicesAppointments } = useGetMyServicesAppointments();
  console.log("servicesAppointments", servicesAppointments);

  useEffect(() => {
    refetchServices();
  }, [isUpdateSuccess, isCreateSuccess]);

  const isEditing = !!services;
  if (isGetLoading) {
    return <Spinner text="Getting Services.." />;
  }

  return (
    <Tabs defaultValue="manage-services" className="container mx-auto mt-10">
      <TabsList>
        <TabsTrigger value="manage-services">Manage Shop</TabsTrigger>
        <TabsTrigger value="appointments">Appointments </TabsTrigger>
      </TabsList>
      <TabsContent value="manage-services">
        <ManageServicesForm
          services={services}
          onSave={isEditing ? updateService : createService}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>

      <TabsContent
        value="appointments"
        className="space-y-5 bg-gray-50 pg-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">
          {servicesAppointments?.length} active appointment
        </h2>
        {servicesAppointments?.map((appointment) => (
          <MyServicesAppointmentCard appointment={appointment} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
