import useGetLocation from "@/api/GetLocation";
import { Link } from "react-router-dom";

export default function FeatureProviders() {
  const { data } = useGetLocation();

  return (
    <div className="bg-pink-100">
      <div className="container p-10">
        <h1 className="text-3xl font-semibold text-gray-600">
          Book your trusted Service Provider in {data}!
        </h1>

        <Link
          to={`/search-service-provider/${data}`}
          className="text-blue-600 hover:underline"
        >
          See All Service Provider in {data}
        </Link>
      </div>
    </div>
  );
}
