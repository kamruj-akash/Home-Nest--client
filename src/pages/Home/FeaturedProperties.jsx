/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import useAxios from "../../hooks/useAxios";

const FeaturedProperties = () => {
  const axiosInstance = useAxios();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/latest-properties")
      .then((data) => setProperties(data.data));
  }, []);
  return (
    <div className="my-30">
      <h1 className="text-center font-semibold text-2xl md:text-5xl mb-10">
        Newest Properties on the Market
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
