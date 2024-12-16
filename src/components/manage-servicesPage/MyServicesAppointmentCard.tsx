import { Appointment, AppointmentStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "../ui/label";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "../ui/select";
import { useEffect, useState } from "react";
import { APPOINTMENT_STATUS } from "@/config/appointment-status-config";
import { useUpdateMyServiceAppointment } from "@/api/MyServicesApi";

type Props = {
  appointment: Appointment;
};
export default function MyServicesAppointmentCard({ appointment }: Props) {
  const { mutate: updateMyServiceAppointment } =
    useUpdateMyServiceAppointment();
  const [status, setStatus] = useState<AppointmentStatus>(appointment.status);

  useEffect(() => {
    setStatus(appointment.status);
  }, [appointment.status]);

  const handleStatusChange = async (newStatus: AppointmentStatus) => {
    updateMyServiceAppointment({
      appointmentId: appointment._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  // Format appointment date to PH timezone (12-hour format with AM/PM)
  const formattedDate = appointment.apointmentDetails.appointmentDate
    ? new Date(appointment.apointmentDetails.appointmentDate).toLocaleString(
        "en-PH",
        {
          weekday: "short", // Short day name (e.g., "Sat")
          year: "numeric", // Full year (e.g., 2024)
          month: "short", // Short month name (e.g., "Dec")
          day: "numeric", // Day of the month (e.g., 21)
          hour: "2-digit", // Hour in 12-hour format (e.g., "01")
          minute: "2-digit", // Minute (e.g., "00")
          hour12: true, // Use 12-hour format with AM/PM
        }
      )
    : "No appointment date"; // Fallback if appointmentDate is undefined
  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid md:grid-cols-3 gap-4 justify-between mb-3">
          <div>
            Customer Name:
            <span className="ml-2 font-normal">
              {appointment.apointmentDetails.name}
            </span>
          </div>
          <div>
            Customer Address:
            <span className="ml-2 font-normal">
              {appointment.apointmentDetails.addressLine1} ,
              {appointment.apointmentDetails.city}
            </span>
          </div>

          <div>
            Appointment Date:
            <span className="ml-2 font-normal">{formattedDate} ,</span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Label htmlFor="status">What is the status of this order?</Label>
        <Select
          value={status}
          onValueChange={(value) =>
            handleStatusChange(value as AppointmentStatus)
          }
        >
          <SelectTrigger id="status">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent position="popper">
            {APPOINTMENT_STATUS.map((status) => (
              <SelectItem value={status.value}>{status.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
