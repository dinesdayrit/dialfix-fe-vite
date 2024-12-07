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
          <Link to="/appointments-status" className=" hover:text-green-500">
            My Appointments
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="text-sm font-bold leading-6 py-5 px-4 bg-zinc-900 hover:bg-zinc-900/80 text-white"
          onClick={async () => await loginWithRedirect()}
        >
          <LogInIcon /> Log in
        </Button>
      )}
    </span>
  );
}
