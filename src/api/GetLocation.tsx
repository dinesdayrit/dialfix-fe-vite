import { useQuery } from "@tanstack/react-query";

// Define interfaces for the API responses
interface Coordinates {
  latitude: number;
  longitude: number;
}

interface BigDataCloudResponse {
  locality: string | undefined; // City name or locality (it may be undefined)
}

export default function useGetLocation() {
  // Fetch location data
  async function fetchLocation(): Promise<string> {
    // Get coordinates from the browser's Geolocation API
    const getCoordinates = new Promise<Coordinates>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser."));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          () => {
            reject(new Error("Permission denied or unavailable location."));
          }
        );
      }
    });

    // Await the coordinates and log them for debugging
    const { latitude, longitude } = await getCoordinates;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Use BigDataCloud's reverse geocoding API to get the city name
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    if (!response.ok) {
      throw new Error("Error fetching location data");
    }

    const data: BigDataCloudResponse = await response.json();

    // Log the response for debugging
    console.log("BigDataCloud response:", data);

    // If the locality is not available, return a default message
    return data.locality || "City not found";
  }

  // Use the useQuery hook to manage fetching the location
  return useQuery({
    queryKey: ["location"],
    queryFn: fetchLocation,
  });
}
