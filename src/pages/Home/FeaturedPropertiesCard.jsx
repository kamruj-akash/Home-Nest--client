import { MapPin } from "lucide-react";
import { Link } from "react-router";

const FeaturedPropertiesCard = ({ property }) => {
  const { _id, name, category, description, location, price, image } =
    property || {};

  return (
    <div className="bg-base-100 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[#0F5660] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between grow">
        <div>
          <h2 className="text-xl font-bold text-base-content mb-2">{name}</h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
            {description?.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>

          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 text-[#0F5660] mr-1" />
            {location}
          </div>

          <p className="text-2xl font-semibold text-[#0F5660] mb-3">
            ৳ {parseInt(price).toLocaleString()}
          </p>
        </div>

        <div className="mt-3">
          <Link
            to={`/property/${_id}`}
            className="btn w-full bg-[#0F5660] hover:bg-[#134a51] text-white border-none rounded-lg font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesCard;
