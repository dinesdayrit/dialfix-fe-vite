import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
};

export default function BookButton({ onCheckout, disabled }: Props) {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated || !currentUser) {
    return <Button onClick={onLogin}>Log in to Book</Button>;
  }

  if (isAuthLoading) {
    return <Spinner />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className="bg-orange-600 hover:bg-orange-600/90 py-6"
        >
          Book Appointment <ArrowRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Booking Details"
          buttonText="BOOK"
        />
      </DialogContent>
    </Dialog>
  );
}
