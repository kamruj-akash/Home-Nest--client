import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import PropertyCard from "../../components/PropertyCard";
import useAxios from "../../hooks/useAxios";

const AllProperties = () => {
  const axios = useAxios();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/all-properties").then((data) => setProperties(data.data));
  }, []);
  return (
    <Container>
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Explore Our Listings
              </h1>
              <p className="text-gray-500 mt-2">
                Find your next home from our curated list of properties for sale
                and rent.
              </p>
            </div>
          </div>
          <div className="relative flex justify-between items-center ">
            <div className="w-[320px] md:w-2xl">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by property name or address..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F5660] focus:bg-white transition"
              />
            </div>

            <div className="mt-4 md:mt-0">
              <select className="select select-bordered w-full max-w-xs text-gray-700 font-medium">
                <option selected>Sort by: Newest</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </Container>
  );
};

export default AllProperties;
