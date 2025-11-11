/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import useAxios from "../../hooks/useAxios";
import FeaturedPropertiesCard from "./FeaturedPropertiesCard";

const FeaturedProperties = () => {
  const axiosInstance = useAxios();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/latest-properties")
      .then((data) => setProperties(data.data));
  }, []);

  return (
    <div className="my-30 max-w-7xl mx-auto">
      <h1 className="text-center font-semibold text-2xl md:text-5xl mb-10">
        Newest Properties on the Market
      </h1>
      {properties.length == 0 && (
        <div className="flex mt-20 justify-center items-center flex-col">
          <Bars
            height="80"
            width="80"
            color="#0E5660"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-black text-sm mt-5"
          >
            Loading your dream homes
          </motion.p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {properties.map((property) => (
          <FeaturedPropertiesCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
