/* eslint-disable react-hooks/exhaustive-deps */
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import AllPropertyCard from "../../components/AllPropertyCard";
import LoadingScreen from "../../components/LoadingScreen";
import useAxios from "../../hooks/useAxios";

const AllProperties = () => {
  const axios = useAxios();
  const [properties, setProperties] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("/all-properties").then((res) => {
      setProperties(res.data);
    });
  }, []);

  const filteredProperties = properties.filter((item) => {
    if (!searchValue) return true;
    return item?.name?.toLowerCase().includes(searchValue.toLowerCase());
  });

  if (properties.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <section className="bg-base-100 py-12">
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-base-content">
                Explore Our Listings
              </h1>
              <p className="text-gray-500 mt-2">
                Find your next home from our curated list of properties for sale
                and rent.
              </p>
            </div>
          </div>

          <div className="relative flex justify-between items-center">
            <div className="w-[320px] md:w-2xl relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search by property name or address..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-base-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F5660]"
              />
            </div>

            <div className="mt-4 md:mt-0">
              <select className="select select-bordered w-full max-w-xs text-gray-700 font-medium">
                <option>Sort by: Newest</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <AllPropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
