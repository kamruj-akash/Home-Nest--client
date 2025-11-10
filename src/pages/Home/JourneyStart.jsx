import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const JourneyStart = () => {
  return (
    <section className="relative bg-[#0F5660] text-white py-40 overflow-hidden">
      {/* Decorative overlay (optional gradient) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[#0F5660]/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto  text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Your Journey Starts Here
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
          Take the first step toward finding your dream home today. Whether
          you’re buying, renting, or selling, HomeNest is here to guide you
          every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="btn bg-white text-[#0F5660] hover:bg-gray-100 font-semibold px-8 border-none"
          >
            Get Started
          </Link>
          <Link
            to="/all-properties"
            className="btn bg-transparent border-white hover:bg-white hover:text-[#0F5660] text-white font-semibold px-8"
          >
            Explore Listings <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneyStart;
