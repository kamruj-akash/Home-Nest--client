import { Calendar, DollarSign, Edit, MapPin, Trash2 } from "lucide-react";

const MyPropertyCard = ({ property }) => {
  const { name, category, location, price, image, postedDate } = property;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      {/* Property Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-[#0F5660] text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Property Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>

          <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
            <MapPin className="w-4 h-4 text-[#0F5660]" /> {location}
          </p>

          <p className="text-[#0F5660] font-semibold flex items-center gap-1 mb-2">
            <DollarSign className="w-4 h-4" /> {price.toLocaleString()}{" "}
            {category === "Rent" && <span>/month</span>}
          </p>

          <p className="text-gray-400 text-xs flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#0F5660]" />
            Posted on{" "}
            {new Date(postedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-5">
          <button className="btn btn-sm bg-[#0F5660] text-white hover:bg-[#134a51] flex items-center gap-2">
            <Edit className="w-4 h-4" /> Edit
          </button>
          <button className="btn btn-sm bg-red-100 text-red-500 hover:bg-red-200 flex items-center gap-2">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
