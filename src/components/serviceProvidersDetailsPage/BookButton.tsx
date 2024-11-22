import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner";

export default function BookButton() {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return <Button onClick={onLogin}>Log in to Book</Button>;
  }

  if (isAuthLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Button className="bg-orange-600 hover:bg-orange-600/90 py-6">
        Book Appointment <ArrowRight />
      </Button>
    </div>
  );
}
