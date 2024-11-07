import { useQuery } from "@tanstack/react-query";

// Define interfaces for the API responses
interface Coordinates {
  latitude: number;
  longitude: number;
}

interface OpenWeatherMapResponse {
  name: string; // City name
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

    const { latitude, longitude } = await getCoordinates;
    console.log(latitude, longitude);
    // Use OpenWeatherMap's reverse geocoding to get city name

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e03623516fbb16080ff35109acdd25b1`
    );

    if (!response.ok) {
      throw new Error("Error fetching location data");
    }

    const data: OpenWeatherMapResponse = await response.json();
    return data.name || "City not found"; // Return the city name
  }

  // Use the useQuery hook to manage fetching the location
  return useQuery({
    queryKey: ["location"],
    queryFn: fetchLocation,
  });
}
