import { ClockCheck, Edit, Eye, MapPin, Trash2 } from "lucide-react";
import { Link } from "react-router";

const PropertyCard = ({
  property,
  handleMyPropertyDelete,
  HandleUpdateProperty,
}) => {
  const { _id, name, price, location, category, image, postedDate } = property;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full font-medium">
          For {category}
        </span>
      </div>

      {/* Info Section */}
      <div className="p-5 flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <h3 className="text-xl font-medium text-gray-600 mb-2">৳ {price}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-medium mb-1 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#0F5660]" />
            {location}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {new Date(postedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            <ClockCheck className="w-4 h-4 text-[#0F5660]" />
          </p>
        </div>
      </div>

      <div className="flex divide-x border-t border-gray-200">
        <Link
          to={`/property/${_id}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          <Eye className="w-4 h-4" /> View
        </Link>

        <button
          onClick={() => HandleUpdateProperty(_id)}
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          <Edit className="w-4 h-4" /> Update
        </button>

        <button
          onClick={() => handleMyPropertyDelete(_id)}
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 text-red-500 font-medium hover:bg-red-50 transition"
        >
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

/** <Link
          to={`/property/${_id}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          <Eye className="w-4 h-4" /> View
        </Link> */
