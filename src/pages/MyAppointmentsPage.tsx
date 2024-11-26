import { useGetMyAppointments } from "@/api/AppointmentApi";
import Spinner from "@/components/Spinner";

export default function MyAppointmentsPage() {
  const { appointments, isLoading } = useGetMyAppointments();

  if (isLoading) {
    return <Spinner text="Getting Appointments..." />;
  }

  if (!appointments || appointments.length === 0) {
    return <div>No appointments found.</div>;
  }

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      {appointments.map((appointment) => (
        <div key={appointment._id} className="border mb-10 p-6">
          <p>
            <strong>Providers Name:</strong>{" "}
            {appointment.ServiceProvider.serviceProviderName}
          </p>
          <p>
            <strong>Providers Address:</strong>{" "}
            {appointment.ServiceProvider.addressLine1}{" "}
            {appointment.ServiceProvider.city}
          </p>
          <p>
            <strong>Appointment Date:</strong>{" "}
            {appointment.apointmentDetails.appointmentDate}
          </p>
          <p>
            <strong>Appointment Status:</strong> {appointment.status}{" "}
            {appointment.status === "placed" && "(waiting for confirmation)"}
          </p>
        </div>
      ))}
    </div>
  );
}
