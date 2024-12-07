import useGetLocation from "@/api/GetLocation";
import TransitionalText from "@/components/homePage/TransitionalText";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const Hero = () => {
  const TEXTS = ["PC-Tech", "Plumber", "Electrician", "Mechanic"];
  const { data } = useGetLocation();

  return (
    <div className="bg-gradient-to-b from-cyan-300 to-green-300 ">
      <div className="relative pb-[110px] pt-[50px] lg:pt-[80px] max-w-6xl mx-auto">
        <div className="container p-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-sky-900 sm:text-[42px] lg:text-[40px] xl:text-5xl flex flex-wrap items-center gap-3">
                  <span>Dial your</span>
                  <TransitionalText
                    className="text-4xl text-green-700"
                    TEXTS={TEXTS}
                  />
                  <br />
                  <span>with just a few taps!</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-gray-800 text-body-color ">
                  Find the right fix, fast. Your trusted pros, all in one app.
                </p>
                <div className="flex flex-col items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={`/search-service-provider/${data}`}
                      className="italic inline-flex items-center justify-center border p-4 rounded-full border-blue-500 md:text-xl bg-blue-600 text-white"
                    >
                      Available Service Providers in your location{" "}
                      <ArrowRight />
                    </Link>
                  </motion.div>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                  >
                    <span className="mr-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                        <rect
                          x="7.99893"
                          y="14.979"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="11.2717"
                          y="7.61523"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Download App
                  </a>
                </div>

                <div className="py-4 flex pt-8 gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-5xl text-blue-900 italic">
                      <AnimatedCounter from={0} to={300} />+
                    </span>
                    <span className="text-sm text-gray-900">
                      Active Service Providers
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <span className="font-semibold text-5xl text-blue-900 italic">
                      <AnimatedCounter from={0} to={1000} />+
                    </span>
                    <span className="text-sm text-gray-900 w-full">
                      Satisfied Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-12 md:px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
