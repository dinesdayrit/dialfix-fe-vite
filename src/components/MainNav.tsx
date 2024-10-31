import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { LogInIcon } from "lucide-react";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/" className="font-bold hover:text-green-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="text-sm font-semibold leading-6 py-4 px-4 rounded-md"
          onClick={async () => await loginWithRedirect()}
        >
          <LogInIcon /> Log in
        </Button>
      )}
    </span>
  );
}
