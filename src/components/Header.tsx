import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed flex flex-col transition-colors duration-500 shadow-md z-30">
      <div className="bg-green-500 w-screen flex items-center justify-center">
        <p className="text-white text-center font-bold animate-pulse">
          SUBSCRIBE TO OUR NEWS LETTER FOR DISCOUNTS AND SPECIAL OFFERS!
        </p>
      </div>

      <div
        className={`flex items-center justify-between py-3 w-screen  transition-colors duration-500 shadow-md ${
          scrolled ? "bg-slate-100 bg-opacity-90" : "bg-white"
        }`}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-baseline gap-1">
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
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>

          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
      </div>
    </div>
  );
}
