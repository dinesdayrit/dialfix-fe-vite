import { useState } from "react";
import ServicesDetails from "./ServicesDetails";
import { Availability } from "./Availabity";

export default function ServicesDetailsCard() {
  const [isActive, setIsActive] = useState("services");

  return (
    <div>
      <div className="flex flex-row items center justify-between ">
        <button
          onClick={() => setIsActive("services")}
          className={`w-full p-2 uppercase font-bold ${
            isActive === "services" ? "bg-blue-600 text-white" : "bg-slate-100"
          }`}
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={`w-full p-2  uppercase tracking-widest font-bold ${
            isActive === "availability"
              ? "bg-blue-600 text-white"
              : "bg-slate-100"
          }`}
        >
          Availability
        </button>
      </div>
      <div className="py-8 px-6">
        {isActive === "services" ? <ServicesDetails /> : <Availability />}
      </div>
    </div>
  );
}
