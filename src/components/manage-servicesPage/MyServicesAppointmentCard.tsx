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
import { useState } from "react";

type Props = {
  appointment: Appointment;
};
export default function MyServicesAppointmentCard({ appointment }: Props) {
  const [status, setStatus] = useState<AppointmentStatus>(appointment.status);
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
            <span className="ml-2 font-normal">
              {appointment.apointmentDetails.appointmentDate} ,
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Label htmlFor="status">What is the status of this order?</Label>
        <Select value={status}>
          <SelectTrigger id="status">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent position="popper"></SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
