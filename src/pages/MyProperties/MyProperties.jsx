import { EraserIcon, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyPropertyCard from "./MyPropertyCard";

const MyProperties = () => {
  const [myProperties, setProperties] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/property?email=${user?.email}`)
      .then((data) => setProperties(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <section className="bg-gray-50 min-h-screen py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              My Properties & Home!!
            </h2>
            <p className="text-gray-500 mt-2">
              See all the properties you’ve added and from your account.
            </p>
          </div>
          {myProperties.length == 0 && (
            <div className=" flex flex-col items-center justify-center text-center bg-gray-50 border border-gray-200 rounded-2xl py-16 px-6 shadow-sm">
              {/* Icon Section */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#E7F3F4] rounded-full flex items-center justify-center mx-auto">
                  <Home className="w-10 h-10 text-[#0F5660]" />
                </div>
                <div className="absolute -bottom-2 right-[35%] bg-white rounded-full p-1 shadow-md">
                  <EraserIcon className="w-5 h-5 text-[#0F5660]" />
                </div>
              </div>

              {/* Text Section */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No Property Added Yet
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                You haven’t added your properties yet. Once you add a properties
                for sale/rent, it’ll show up here. Your properties helps others
                find their dream home!
              </p>

              {/* CTA Button */}
              <Link
                to={"/add-properties"}
                className="btn bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold px-8 rounded-lg"
              >
                Add Your First Property
              </Link>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProperties.map((property) => (
              <MyPropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProperties;
