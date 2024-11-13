import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../ui/button";

export function Availability() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const formattedDate = `${date?.toString().split(" ").slice(0, 4).join(" ")}`;

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

  return (
    <div>
      <h2 className="font-bold py-4 font-xl text-slate-600 uppercase">
        Select a Date and Time
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <h2 className="pb-4 text-blue-700 text-center py-3 px-4 border border-blue-500">
              {formattedDate}
            </h2>
            <div className="py-3 grid grid-cols-2 gap-2">
              {timeStamp.map((item, i) => {
                return (
                  <Button
                    key={i}
                    className="bg-blue-600 rounded-none text-sm text-center text-white p-2"
                  >
                    {item.time}
                    {item.period}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
