import { Card, CardContent } from "./ui/card";
import { Accessibility, Phone, Shield } from "lucide-react";

const WhatWeOffer = () => {
  const offerings = [
    {
      id: 1,
      title: "Accessible Travel",
      description:
        "Wheelchair Accessible, Disability, Friendly, Barrier-Free Travel, Accessible, Step-Free Access",
      icon: Accessibility,
    },
    {
      id: 2,
      title: "Mobility & Support",
      description:
        "Wheelchair Accessible, Disability, Friendly, Barrier-Free Travel, Accessible, Step-Free Access",
      icon: Phone,
    },
    {
      id: 3,
      title: "Health & Safety",
      description:
        "Wheelchair Accessible, Disability, Friendly, Barrier-Free Travel, Accessible, Step-Free Access",
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inclusive travel experiences designed for everyone
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {offerings.map((offering) => {
            const IconComponent = offering.icon;
            return (
              <Card
                key={offering.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-coral-orange/10 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-coral-orange transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {offering.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Horizontal Panel Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
            {offerings.map((offering) => {
              const IconComponent = offering.icon;
              return (
                <Card
                  key={offering.id}
                  className="group hover:shadow-lg transition-all duration-300 bg-white border shadow-sm"
                >
                  <CardContent className="p-3 text-center">
                    {/* Icon Container */}
                    <div className="mb-2 flex justify-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-coral-orange/10 transition-colors duration-300">
                        <IconComponent className="w-4 h-4 text-gray-700 group-hover:text-coral-orange transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 text-[10px] leading-tight">
                      {offering.description.split(",").slice(0, 2).join(", ")}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
