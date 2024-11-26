import { useGetMyAppointments } from "@/api/AppointmentApi";
import Spinner from "@/components/Spinner";
import { Separator } from "@/components/ui/separator";

export default function MyAppointmentsPage() {
  const { appointments, isLoading } = useGetMyAppointments();

  if (isLoading) {
    return <Spinner text="Getting Appointments..." />;
  }

  if (!appointments || appointments.length === 0) {
    return <div>No appointments found.</div>;
  }

  return (
    <div className="container p-2">
      <h1 className="text-2xl font-bold mb-4 mt-10">My Appointments</h1>
      <ul className="list-disc pl-5 space-y-6 mt-6 border-b-8 pb-10">
        {appointments.map((appointment, index) => (
          <li key={index} className="pt-4 ">
            <Separator className="mb-2" />
            <p className="mb-2 ">
              <strong>Provider's Name:</strong>{" "}
              {appointment.ServiceProvider?.serviceProviderName}
            </p>
            <p className="mb-2">
              <strong>Provider's Address:</strong>{" "}
              {appointment.ServiceProvider?.addressLine1},{" "}
              {appointment.ServiceProvider?.city}
            </p>
            <p className="mb-2">
              <strong>Appointment Date:</strong>{" "}
              {appointment.apointmentDetails?.appointmentDate}
            </p>
            <p className="uppercase text-lg">
              <strong>Appointment Status:</strong> {appointment?.status}{" "}
              {appointment.status === "placed" && "(waiting for confirmation)"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
