import { Services } from "@/types";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dot } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  serviceProviders: Services;
};
export default function SearchResultsCard({ serviceProviders }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
    >
      <Link
        to={`/detail/${serviceProviders._id}`}
        className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
      >
        <AspectRatio ratio={16 / 6}>
          <img
            src={serviceProviders.imageUrl}
            className="rounded-md w-full h-full object-cover"
          />
        </AspectRatio>
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
            {serviceProviders.serviceProviderName}
          </h3>
          <div id="card-content" className="grid md:grid-cols-2 gap-2">
            <div className="flex flex-row flex-wrap">
              {serviceProviders.serviceSector.map((item, index) => (
                <span className="flex">
                  <span>{item}</span>
                  {index < serviceProviders.serviceSector.length - 1 && <Dot />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
