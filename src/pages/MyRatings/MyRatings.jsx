import { MessageSquare, Star } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyRatingCard from "./MyRatingCard";

const MyRatings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  const deleteReviewHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/ratings/${id}`).then(() => {
          const res = reviews.filter((item) => item._id != id);
          setReviews(res);
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleEdit = () => {
    toast.error("Edit features coming soon!");
  };

  useEffect(() => {
    axiosSecure
      .get(`/ratings?email=${user?.email}`)
      .then((data) => setReviews(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-gray-50  py-14">
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
          {reviews.length == 0 ? (
            <div className="flex flex-col items-center justify-center text-center bg-gray-50 border border-gray-200 rounded-2xl py-16 px-6 shadow-sm">
              {/* Icon Section */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#E7F3F4] rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-10 h-10 text-[#0F5660]" />
                </div>
                <div className="absolute -bottom-2 right-[35%] bg-white rounded-full p-1 shadow-md">
                  <MessageSquare className="w-5 h-5 text-[#0F5660]" />
                </div>
              </div>

              {/* Text Section */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No Reviews Yet
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                You haven’t shared your experience yet. Once you leave a review
                for a property, it’ll show up here. Your feedback helps others
                find their dream home!
              </p>

              {/* CTA Button */}
              <button className="btn bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold px-8 rounded-lg">
                Write Your First Review
              </button>
            </div>
          ) : (
            reviews.map((review) => (
              <MyRatingCard
                key={review._id}
                review={review}
                handleEdit={handleEdit}
                deleteReviewHandler={deleteReviewHandler}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MyRatings;
