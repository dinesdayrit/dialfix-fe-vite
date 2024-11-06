import { useQuery } from "@tanstack/react-query";

async function fetchLocation() {
  const response = await fetch(`https://ipinfo.io/json`);
  if (!response.ok) {
    throw new Error("Error fetching location data");
  }
  const data = await response.json();
  return data.city || "City not found";
}

export default function useGetLocation() {
  return useQuery({
    queryKey: ["location"],
    queryFn: fetchLocation,
  });
}
