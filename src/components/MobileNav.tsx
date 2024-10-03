import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>Welcome to dialFix</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-green-500">Log in</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
