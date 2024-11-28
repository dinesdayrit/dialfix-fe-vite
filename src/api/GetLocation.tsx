import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const openCageAPI = import.meta.env.VITE_OpenCageAPI;

export default function useGetLocation() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // Fetch user's geolocation when the component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  // Function to fetch location based on latitude and longitude
  async function fetchLocation(): Promise<string> {
    if (latitude === null || longitude === null) {
      throw new Error("Coordinates are not available yet");
    }

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${openCageAPI}`
    );

    if (!response.ok) {
      throw new Error("Error fetching location data");
    }

    const data = await response.json();
    console.log(data);

    // Extract city or fallback
    const city = data.results?.[0]?.components?.city || "City not found";
    return city;
  }

  // React Query for location fetching
  return useQuery<string, Error>({
    queryKey: ["location", latitude, longitude], // Include lat/lng in key for reactivity
    queryFn: fetchLocation,
    enabled: latitude !== null && longitude !== null, // Only fetch when coordinates are available
  });
}
