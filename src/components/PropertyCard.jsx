import { formatDistanceToNow, parseISO } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router";

const PropertyCard = ({ property }) => {
  const { name, category, location, price, image, postedDate, _id } =
    property || [];

  // Calculate days since posted
  const posted = parseISO(postedDate);
  const daysAgo = formatDistanceToNow(posted, { addSuffix: true });
  const isNew =
    (new Date() - new Date(postedDate)) / (1000 * 60 * 60 * 24) <= 7;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl border border-gray-100">
      {/* Image section */}
      <figure className="relative">
        <img src={image} alt={name} className="h-56 w-full object-cover" />
        {isNew && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              NEW
            </span>
          </div>
        )}
      </figure>

      {/* Details section */}
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
          <p className="text-gray-500 text-sm mb-2">
            For {category} <span className="mx-1">|</span> {location}
          </p>

          <p className="text-2xl font-semibold text-[#0F5660] mb-2">
            ৳ {price.toLocaleString()}
          </p>

          <div className="flex items-center text-gray-400 text-sm">
            <CalendarDays className="w-4 h-4 mr-1" />
            <span>Posted {daysAgo}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <Link
            to={`/property/${_id}`}
            className="btn w-full bg-[#0F5660] hover:bg-[#134a51] text-white border-none rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
