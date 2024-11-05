import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";

// Define the structure for location coordinates
type Coordinates = {
  latitude: number;
  longitude: number;
};

// Define the expected structure of the API response
type WeatherApiResponse = {
  name: string;
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [city, setCity] = useState<string>("Loading...");

  // Function to get city name from coordinates
  async function fetchCityName(
    latitude: number,
    longitude: number
  ): Promise<void> {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`
      );
      const data: WeatherApiResponse = await response.json();
      setCity(data.name || "City not found");
    } catch (error) {
      console.error("Error fetching city:", error);
      setCity("City not found");
    }
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchCityName(latitude, longitude);
        },
        (error: GeolocationPositionError) => {
          console.error("Geolocation error:", error);
          setCity("Location unavailable");
        }
      );
    } else {
      console.log("Geolocation not supported");
      setCity("Geolocation not supported");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleLocationClick(); // Trigger location fetch on component mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex items-center justify-between py-4 w-screen z-30 transition-colors duration-500 shadow-md ${
        scrolled ? "bg-slate-100 bg-opacity-90" : "bg-white bg-opacity-90"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className={`flex items-center font-extrabold tracking-tight transition-all duration-500 ${
            scrolled ? "text-2xl" : "text-4xl"
          } text-orange-500`}
        >
          dial
          <span className="text-green-600 flex justify-center items-center">
            Fix <Wrench className="h-5" />
          </span>
        </Link>

        <div className="md:hidden">
          <div className="ml-4 text-sm text-gray-600">{city}</div>
          <MobileNav />
        </div>

        <div className="hidden md:flex gap-2 items-center">
          <div className="ml-4 text-sm text-gray-600">{city}</div>
          <MainNav />
        </div>
      </div>
    </div>
  );
}
