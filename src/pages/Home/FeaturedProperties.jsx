/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
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

  if (properties.length == 0) {
    return (
      <div className="flex justify-center items-center">
        <Puff
          visible={true}
          width="320"
          height="320"
          color="#0E5660"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
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
