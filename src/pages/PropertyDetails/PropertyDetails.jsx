import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Calendar, Mail, MapPin, User } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import LoadingScreen from "../../components/LoadingScreen";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PropertyDetails = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { id: paramsId } = useParams();

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/property/${paramsId}`).then((data) => {
      setProperty(data.data), setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    const submissionTime = new Date().toISOString();
    const reviewDesc = e.target.reviewInput.value;
    const newReview = {
      reviewDesc,
      rating,
      location: property?.location,
      reviewer: user?.displayName,
      reviewerEmail: user?.email,
      propertyName: property?.name,
      propertyImage: property?.image,
      reviewDate: submissionTime,
    };

    axiosSecure
      .post("/ratings", newReview)
      .then(() => toast.success("Review Submitted"));
    setRating(0);
    e.target.reset();
  };
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <section className="bg-base-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10">
            <img
              src={property?.image}
              alt="Property"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-base-100 rounded-2xl shadow-md p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-base-content">
                  {property?.name}
                </h2>
                <p className="text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4 text-[#0F5660]" />
                  {property?.location}
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-2xl font-bold text-[#0F5660]">
                  ৳{property?.price}/month
                </p>
                <p className="text-sm text-gray-500">
                  For {property?.category}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-base-content mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {property?.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-10">
              <h3 className="text-lg font-semibold text-base-content mb-3">
                Posted By
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={property?.owner_photoURL}
                  alt="Owner"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0F5660]"
                />
                <div>
                  <h4 className="text-base-content font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0F5660]" />{" "}
                    {property?.owner_name}
                  </h4>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <Mail className="w-4 h-4 text-[#0F5660]" />{" "}
                    {property?.owner_email}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#0F5660]" /> Posted on{" "}
                    {property?.postedDate}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-base-100 rounded-2xl shadow-sm p-8 mt-10">
                <h3 className="text-lg font-semibold text-base-content mb-4">
                  Share your experience
                </h3>

                {/* Rating Stars */}
                <form onSubmit={reviewSubmitHandler}>
                  <div className="flex gap-5 mb-5">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={setRating}
                      isRequired={true}
                    />
                  </div>

                  {/* Review Input */}
                  <textarea
                    required
                    name="reviewInput"
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F5660] text-gray-700 placeholder-gray-400"
                    placeholder="Tell us about your thoughts..."
                  ></textarea>
                  <button className="btn bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold rounded-lg px-8">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
