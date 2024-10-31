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
    <div
      className={`fixed flex items-center justify-between py-4 w-screen z-30 transition-colors duration-500 ${
        scrolled ? "bg-slate-100 bg-opacity-90" : "bg-white bg-opacity-90"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className={`flex items-center font-extrabold tracking-tight transition-all duration-500 ${
            scrolled ? "text-2xl" : "text-3xl"
          } text-orange-500`}
        >
          dial
          <span className="text-green-600 flex justify-center items-center">
            Fix <Wrench className="h-5" />
          </span>
        </Link>
        <div className="md:hidden">
          {" "}
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
