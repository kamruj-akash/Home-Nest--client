import { Link } from "react-router";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
      title: "Find Your Dream Home",
      description:
        "Explore exclusive listings and find the perfect place to call your own.",
      btnText: "Explore Listings",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      title: "Modern Living Starts Here",
      description:
        "Experience luxurious spaces with verified listings, curated for your lifestyle.",
      btnText: "Browse All Properties",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=600",
      title: "Modern Living Starts Here",
      description:
        "Experience luxurious spaces with verified listings, curated for your lifestyle.",
      btnText: "Browse All Properties",
    },
  ];

  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-[0.50]"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
                  {slide.description}
                </p>
                <Link
                  to="/all-properties"
                  className="btn bg-[#0F5660] border-none text-white text-base px-6 hover:bg-[#134a51]"
                >
                  {slide.btnText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
