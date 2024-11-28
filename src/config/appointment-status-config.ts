import { AppointmentStatus } from "@/types";

type AppointmentStatusInfo = {
  label: string;
  value: AppointmentStatus;
  progressValue: number;
};

export const APPOINTMENT_STATUS: AppointmentStatusInfo[] = [
  {
    label: "Awaiting Providers Confirmation",
    value: "placed",
    progressValue: 25,
  },
  {
    label: "Confirmed",
    value: "confirmed",
    progressValue: 50,
  },
  { label: "In Progress", value: "inProgress", progressValue: 75 },
  { label: "Service Completed", value: "serviceCompleted", progressValue: 100 },
];
