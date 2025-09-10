import { Accessibility, Phone, Heart } from "lucide-react";

const ServiceHighlights = () => {
  const services = [
    {
      icon: <Accessibility size={32} />,
      title: "Accessible Travel",
      description: "Wheelchair-accessible destinations and disability-friendly accommodations for inclusive adventures."
    },
    {
      icon: <Phone size={32} />,
      title: "Mobility & Support",
      description: "24/7 support services and assistance throughout your journey for a worry-free experience."
    },
    {
      icon: <Heart size={32} />,
      title: "Health & Safety",
      description: "Health-focused travel planning with medical support and safety protocols in place."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;