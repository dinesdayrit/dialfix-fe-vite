import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function BookButton() {
  return (
    <div>
      <Button className="bg-orange-600 hover:bg-orange-600/90 py-6">
        Book Appointment <ArrowRight />
      </Button>
    </div>
  );
}
