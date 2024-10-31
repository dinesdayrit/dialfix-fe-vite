import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <div className="fixed flex items-center justify-between py-4 bg-white bg-opacity-90 w-screen z-30">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-orange-500 flex"
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
