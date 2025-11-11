import { formatDistanceToNow, parseISO } from "date-fns";
import { CalendarDays, MapPin, User } from "lucide-react";
import { Link } from "react-router";

const AllPropertyCard = ({ property }) => {
  const {
    _id,
    name,
    category,
    price,
    location,
    image,
    owner_name,
    postedDate,
  } = property || {};

  // Date Handling
  const posted = parseISO(postedDate);
  const daysAgo = formatDistanceToNow(posted, { addSuffix: true });
  const isNew =
    (new Date() - new Date(postedDate)) / (1000 * 60 * 60 * 24) <= 7;

  return (
    <div className="bg-base-100 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {isNew && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            NEW
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between grow">
        <div>
          <h3 className="text-xl font-bold text-text-base-content mb-1">
            {name}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span className="font-medium capitalize">For {category}</span>
            <span className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-4 h-4 text-[#0F5660]" />
              {location}
            </span>
          </div>

          <p className="text-2xl font-semibold text-[#0F5660] mb-3">
            ৳ {parseInt(price).toLocaleString()}
          </p>

          <div className="flex items-center justify-between text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-[#0F5660]" /> {owner_name}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4 text-[#0F5660]" />
              {daysAgo}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <Link
            to={`/property/${_id}`}
            className="btn w-full bg-[#0F5660] hover:bg-[#134a51] text-white border-none rounded-lg font-semibold"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPropertyCard;
