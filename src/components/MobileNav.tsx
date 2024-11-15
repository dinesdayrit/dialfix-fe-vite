import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-green-500" />
              {user?.email}
            </span>
          ) : (
            <span>Welcome to DialHub</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex-1 font-bold bg-green-500"
              onClick={async () => await loginWithRedirect()}
            >
              Log in
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
