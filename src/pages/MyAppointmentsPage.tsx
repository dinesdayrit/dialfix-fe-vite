import { useGetMyAppointments } from "@/api/AppointmentApi";
import Spinner from "@/components/Spinner";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { APPOINTMENT_STATUS } from "@/config/appointment-status-config";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useGetLocation from "@/api/GetLocation";

export default function MyAppointmentsPage() {
  const { appointments, isLoading } = useGetMyAppointments();
  const { data } = useGetLocation();

  if (isLoading) {
    return <Spinner text="Getting Appointments..." />;
  }

  if (!appointments || appointments.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center gap-4s mt-10">
        <p>No appointments found.</p>
        <Link
          to={`/search-service-provider/${data?.city}`}
          className="text-blue-600 hover:underline flex"
        >
          Book appointment to your Trusted Service Provider in {data?.city}{" "}
          <ArrowUpRight />
        </Link>
      </div>
    );
  }

  return (
    <div className="container p-2">
      <h1 className="text-2xl font-bold mb-4 mt-10">My Appointments</h1>
      <ul className="list-disc pl-5 space-y-6 mt-6 border-b-8 pb-10">
        {appointments.map((appointment, index) => {
          const statusInfo =
            APPOINTMENT_STATUS.find((a) => a.value === appointment.status) ||
            APPOINTMENT_STATUS[0];

          // Check if appointmentDate is defined before using it
          const appointmentDate =
            appointment.apointmentDetails?.appointmentDate;

          // Only format the date if appointmentDate exists
          const formattedDate = appointmentDate
            ? new Date(appointmentDate).toLocaleString("en-PH", {
                weekday: "short", // Short day name (e.g., "Sat")
                year: "numeric", // Full year (e.g., 2024)
                month: "short", // Short month name (e.g., "Dec")
                day: "numeric", // Day of the month (e.g., 21)
                hour: "2-digit", // Hour in 12-hour format (e.g., "01")
                minute: "2-digit", // Minute (e.g., "00")
                hour12: true, // Use 12-hour format with AM/PM
              })
            : "No appointment date";

          return (
            <li key={index} className="pt-4">
              <Separator className="mb-2" />
              <p className="mb-2">
                <strong>Provider's Name:</strong>{" "}
                {appointment.ServiceProvider?.serviceProviderName}
              </p>
              <p className="mb-2">
                <strong>Provider's Address:</strong>{" "}
                {appointment.ServiceProvider?.addressLine1},{" "}
                {appointment.ServiceProvider?.city}
              </p>
              <p className="mb-2">
                <strong>Appointment Date:</strong> {formattedDate}
              </p>
              <p className="uppercase text-lg">
                <strong>Appointment Status:</strong> {appointment?.status}{" "}
                {appointment.status === "placed" && (
                  <>
                    (waiting for confirmation){" "}
                    <a className="text-sm underline text-red-400 cursor-pointer">
                      cancel
                    </a>
                  </>
                )}
              </p>
              <Progress
                className={`${
                  statusInfo.progressValue !== 100 ? "animate-pulse" : ""
                }`}
                value={statusInfo.progressValue}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
