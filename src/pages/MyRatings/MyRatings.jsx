import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyRatingCard from "./MyRatingCard";

const MyRatings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  console.log(reviews);

  useEffect(() => {
    axiosSecure
      .get(`/ratings?email=${user?.email}`)
      .then((data) => setReviews(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            My Ratings & Reviews
          </h2>
          <p className="text-gray-500 mt-2">
            See all the properties you’ve reviewed and your feedback history.
          </p>
        </div>

        {/* Review Cards */}
        <div>
          {reviews.map((review) => (
            <MyRatingCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyRatings;
