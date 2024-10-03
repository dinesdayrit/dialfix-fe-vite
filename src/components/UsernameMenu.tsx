import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function UsernameMenu() {
  const { user, logout } = useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-green-500 gap-2">
          {user?.picture ? (
            <img
              src={user.picture}
              alt={user.name || "User Avatar"}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <CircleUserRound className="h-6 w-6 text-green-500" />
          )}

          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              to="/manage-services"
              className="font-bold hover:text-green-500"
            >
              Manage your services
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-green-500">
              User Profile
            </Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <Button
              className="flex flex-1 font-bold bg-green-500"
              onClick={() => logout()}
            >
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
