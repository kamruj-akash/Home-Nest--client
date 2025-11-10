import { BadgeCheck, Building2, Users } from "lucide-react";

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-[#0F5660]" />,
      title: "Expert Agents",
      desc: "Our certified agents are here to guide you through every step of the process.",
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8 text-[#0F5660]" />,
      title: "Vast Selection",
      desc: "Browse thousands of curated listings updated daily to find your perfect match.",
    },
    {
      id: 3,
      icon: <BadgeCheck className="w-8 h-8 text-[#0F5660]" />,
      title: "Simple Process",
      desc: "We simplify the paperwork and negotiations so you can move in faster.",
    },
  ];

  return (
    <section className="py-16  text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
          Why HomeNest?
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          We provide a seamless and trustworthy experience for buying, renting,
          or selling your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-[#E7F3F4] p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {item.title}
              </h3>
              <p className="text-base-content text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
