import { Calendar, Mail, MapPin, Star, User } from "lucide-react";
import { useEffect } from "react";

const PropertyDetails = () => {

    useEffect(()=>{
        
    },[])

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Banani Studio Loft
              </h2>
              <p className="text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-[#0F5660]" />
                Banani, Dhaka
              </p>
            </div>

            <div className="mt-4 md:mt-0 text-right">
              <p className="text-2xl font-bold text-[#0F5660]">৳30,000/month</p>
              <p className="text-sm text-gray-500">For Rent</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This cozy studio loft in Banani is perfect for professionals
              seeking a modern lifestyle. Within walking distance to Banani
              market, this property features an open-plan design, full-length
              windows, and plenty of natural light.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Posted By
            </h3>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328f4f52?auto=format&fit=crop&w=400&q=80"
                alt="Owner"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0F5660]"
              />
              <div>
                <h4 className="text-gray-800 font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-[#0F5660]" /> Tania Alam
                </h4>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  <Mail className="w-4 h-4 text-[#0F5660]" /> tania@example.com
                </p>
                <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#0F5660]" /> Posted on Nov
                  2, 2025
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ratings & Reviews
            </h3>

            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-gray-300" />
              <span className="text-gray-600 ml-2 text-sm">(4.0 / 5)</span>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800">Arif Hasan</p>
                <p className="text-sm text-gray-500">⭐ 5</p>
              </div>
              <p className="text-gray-600 text-sm">
                “Great location and very comfortable! The agent was super
                helpful and professional throughout the process.”
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800">Nadia Rahman</p>
                <p className="text-sm text-gray-500">⭐ 4</p>
              </div>
              <p className="text-gray-600 text-sm">
                “Loved the space! Just wished there was a little more parking
                space. Otherwise perfect.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
