import {
  AlignLeft,
  DollarSign,
  FolderPlus,
  Home,
  Image,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateProperty = () => {
  const [property, setProperty] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { id: paramsId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get(`/property/${paramsId}`).then((data) => {
      setProperty(data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateProperty = (e) => {
    e.preventDefault();
    const update = {
      name: e.target.name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      image: e.target.image.value,
      owner_email: property.owner_email,
    };

    axiosSecure.patch(`/property/${property._id}`, update).then((data) => {
      if (data.data.modifiedCount) {
        toast.success("Update Success");
        navigate("/my-properties");
      }
    });
  };

  return (
    <section className="bg-base-300 min-h-screen py-14">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-md p-8 md:p-10 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0F5660] mb-2">
            Update Property
          </h2>
          <p className="text-gray-500">
            Modify your property details and save the updated information.
          </p>
        </div>

        <form onSubmit={handleUpdateProperty} className="space-y-6">
          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#0F5660]" /> Property Name
            </label>
            <input
              defaultValue={property.name}
              type="text"
              name="name"
              placeholder="Enter property name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <AlignLeft className="w-4 h-4 text-[#0F5660]" /> Description
            </label>
            <textarea
              name="description"
              defaultValue={property.description}
              className="textarea textarea-bordered h-28 w-full"
              placeholder="Describe the property..."
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <FolderPlus className="w-4 h-4 text-[#0F5660]" /> Category
            </label>
            <select
              name="category"
              defaultValue={property.category}
              className="select select-bordered w-full "
            >
              <option>Rent</option>
              <option>Sale</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#0F5660]" /> Price (৳)
            </label>
            <input
              name="price"
              defaultValue={property.price}
              type="number"
              placeholder="Enter property price"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0F5660]" /> Location
            </label>
            <input
              name="location"
              defaultValue={property.location}
              type="text"
              placeholder="Enter property location"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700 flex items-center gap-2">
              <Image className="w-4 h-4 text-[#0F5660]" /> Image URL
            </label>
            <input
              name="image"
              defaultValue={property.image}
              type="text"
              placeholder="Enter image link"
              className="input input-bordered w-full "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="form-control">
              <label className="label font-medium text-gray-700">
                Owner Name
              </label>
              <input
                readOnly
                defaultValue={property.owner_name}
                className="input input-bordered w-full bg-base-100 cursor-not-allowed"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium text-gray-700">
                Owner Email
              </label>
              <input
                readOnly
                defaultValue={property.owner_email}
                className="input input-bordered w-full bg-base-100 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              to={"/my-properties"}
              className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-10"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="btn bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold text-lg px-10"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateProperty;
