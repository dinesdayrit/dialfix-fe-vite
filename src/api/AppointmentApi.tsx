import { Appointment } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Hook to fetch user appointments
export const useGetMyAppointments = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyAppointmentsRequest = async (): Promise<Appointment[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/appointments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("No appointments found.");
    }

    return response.json();
  };

  const {
    data: appointments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchAppointments"],
    queryFn: getMyAppointmentsRequest,
  });

  return { appointments, isLoading, refetch };
};

// Hook to create a new appointment
export const useCreateAppointment = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createAppointmentRequest = async (
    appointmentData: Partial<Appointment>
  ): Promise<Appointment> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      throw new Error("Failed to create appointment.");
    }

    return response.json();
  };

  const mutation = useMutation({ mutationFn: createAppointmentRequest });

  if (mutation.isSuccess) {
    toast.success("Appointment created!");
  }

  if (mutation.isError) {
    toast.error("Unable to create appointment.");
  }

  return mutation;
};

type UpdateAppointmentStatusRequest = {
  appointmentId: string;
  status: string;
};

export const useUpdateMyServiceAppointment = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyServiceAppointment = async (
    updateStatusAppointmentRequest: UpdateAppointmentStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/apointment/${updateStatusAppointmentRequest.appointmentId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateStatusAppointmentRequest.status }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    return response.json();
  };

  const mutation = useMutation({ mutationFn: updateMyServiceAppointment });

  if (mutation.isSuccess) {
    toast.success("Appointment updated!");
  }

  if (mutation.isError) {
    toast.error("Unable to update appointment.");
  }

  return mutation;
};
