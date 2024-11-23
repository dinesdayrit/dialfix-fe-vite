import { useState } from "react";
import ServicesDetails from "./ServicesDetails";
import { Availability } from "./Availabity";

export default function ServicesDetailsCard() {
  const [isActive, setIsActive] = useState("availability");

  return (
    <div>
      <div className="flex flex-row items center justify-between">
        <button
          onClick={() => setIsActive("services")}
          className={`w-full py-4 uppercase font-bold ${
            isActive === "services" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
        >
          Services Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={`w-full py-4  uppercase tracking-widest font-bold ${
            isActive === "availability"
              ? "bg-blue-600 text-white"
              : "bg-slate-300"
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
