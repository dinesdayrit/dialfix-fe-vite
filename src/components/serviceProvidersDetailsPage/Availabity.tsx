import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../ui/button";
import BookButton from "./BookButton";
import { useCreateAppointment } from "@/api/AppointmentApi";
import { useParams } from "react-router-dom";

export function Availability() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const formattedDate = `${date?.toString().split(" ").slice(0, 4).join(" ")}`;
  const { mutate: createAppointment } = useCreateAppointment();
  const { serviceProviderId } = useParams<{ serviceProviderId: string }>();

  const timeStamp = [
    {
      time: "8:30",
      period: "am",
    },
    {
      time: "9:00",
      period: "am",
    },
    {
      time: "9:30",
      period: "am",
    },
    {
      time: "10:00",
      period: "am",
    },
    {
      time: "10:30",
      period: "am",
    },
    {
      time: "1:00",
      period: "pm",
    },
    {
      time: "1:30",
      period: "pm",
    },
    {
      time: "2:00",
      period: "pm",
    },
    {
      time: "2:30",
      period: "pm",
    },
  ];

  const onCheckout = async (userFormData: any) => {
    if (!date || !serviceProviderId) {
      alert("Please select a date and ensure provider details are loaded.");
      return;
    }

    const appointmentData = {
      serviceProvider: serviceProviderId,
      apointmentDetails: {
        email: userFormData.email,
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        appointmentDate: date.toISOString(),
      },
    };

    createAppointment(appointmentData);
  };
  return (
    <div>
      <h2 className="font-bold py-4 font-xl text-slate-600 uppercase">
        Select a Date and Time
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full mx-auto">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <p className="text-blue-700">You have selected</p>
            <h2 className="font-semibold text-3xl border-b-2 py-2">
              {formattedDate}
            </h2>
            <div className="py-6 grid grid-cols-3 gap-2">
              {timeStamp.map((item, i) => {
                return (
                  <Button
                    key={i}
                    className="bg-white rounded border text-black hover:bg-gray-100"
                  >
                    {item.time}
                    {item.period}
                  </Button>
                );
              })}
            </div>
            <BookButton disabled={!formattedDate} onCheckout={onCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
}
