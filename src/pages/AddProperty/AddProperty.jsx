import {
  AlignLeft,
  DollarSign,
  FolderPlus,
  Home,
  Image,
  MapPin,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const AddProperty = () => {
  const { user } = useAuth();

  const handleAddProperty = (e) => {
    e.preventDefault();
    const newProperty = {};
    console.log(newProperty);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0F5660] mb-2">
            Add New Property
          </h2>
          <p className="text-gray-500">
            Fill in the details below to add your property listing to HomeNest.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAddProperty} className="space-y-6">
          {/* Property Name */}
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#0F5660]" /> Property Name
            </label>
            <input
              type="text"
              placeholder="e.g. Bashundhara Family Duplex"
              className="input input-bordered w-full focus:ring-2 focus:ring-[#0F5660] focus:border-[#0F5660]"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <AlignLeft className="w-4 h-4 text-[#0F5660]" /> Description
            </label>
            <textarea
              placeholder="Write a short description about your property..."
              className="textarea textarea-bordered h-28 w-full focus:ring-2 focus:ring-[#0F5660] focus:border-[#0F5660]"
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <FolderPlus className="w-4 h-4 text-[#0F5660]" /> Category
            </label>
            <select className="select select-bordered w-full focus:ring-2 focus:ring-[#0F5660] focus:border-[#0F5660]">
              <option>Choose a category</option>
              <option>Rent</option>
              <option>Sale</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#0F5660]" /> Price (৳)
            </label>
            <input
              type="number"
              placeholder="e.g. 30000"
              className="input input-bordered w-full focus:ring-2 focus:ring-[#0F5660] focus:border-[#0F5660]"
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0F5660]" /> Location
            </label>
            <input
              type="text"
              placeholder="e.g. Bashundhara, Dhaka"
              className="input input-bordered w-full focus:ring-2 focus:ring-[#0F5660] focus:border-[#0F5660]"
            />
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <Image className="w-4 h-4 text-[#0F5660]" /> Image URL
            </label>
            <input
              type="text"
              placeholder="https://your-image-link.com"
              className="input input-bordered w-full focus:ring-2 focus:ring-[#0F5660] focus:border-[#0F5660]"
            />
          </div>

          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="form-control">
              <label className="label font-medium text-gray-700">
                User Name
              </label>
              <input
                type="text"
                readOnly
                defaultValue={user.displayName}
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium text-gray-700">
                User Email
              </label>
              <input
                type="email"
                readOnly
                defaultValue={user.email}
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button className="btn bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold text-lg px-10">
              Add Property
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProperty;
