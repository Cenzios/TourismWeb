import { Button } from "@/components/ui/button";
import { Fuel, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const RentVehicleSection = () => {
  const vehicles = [
    {
      id: 1,
      model: "Toyota Prius",
      type: "Sedan",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      specs: {
        fuel: "80L",
        transmission: "Manual",
        capacity: "5 People",
      },
      price: "Rs 12,000",
      priceUnit: "day",
    },
    {
      id: 2,
      model: "Honda Civic",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      specs: {
        fuel: "60L",
        transmission: "Manual",
        capacity: "5 People",
      },
      price: "Rs 10,000",
      priceUnit: "day",
    },
    {
      id: 3,
      model: "Toyota Hiace",
      type: "Van",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      specs: {
        fuel: "100L",
        transmission: "Manual",
        capacity: "9 People",
      },
      price: "Rs 18,000",
      priceUnit: "day",
    },
  ];

  return (
    <section id="vehicles" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Rent Vehicle</h2>

        {/* Vehicles Grid - Show only first 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.slice(0, 3).map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/vehicle/${vehicle.id}`}
              className="block"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium">
                      {vehicle.type}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {vehicle.model}
                  </h3>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Fuel
                        className="mx-auto mb-2 text-muted-foreground"
                        size={20}
                      />
                      <div className="text-sm font-medium">
                        {vehicle.specs.fuel}
                      </div>
                      <div className="text-xs text-muted-foreground">Fuel</div>
                    </div>
                    <div className="text-center">
                      <Settings
                        className="mx-auto mb-2 text-muted-foreground"
                        size={20}
                      />
                      <div className="text-sm font-medium">
                        {vehicle.specs.transmission}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Transmission
                      </div>
                    </div>
                    <div className="text-center">
                      <Users
                        className="mx-auto mb-2 text-muted-foreground"
                        size={20}
                      />
                      <div className="text-sm font-medium">
                        {vehicle.specs.capacity}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Capacity
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-primary">
                      {vehicle.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{vehicle.priceUnit}
                    </span>
                  </div>

                  <Button variant="pill" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/vehicles">
            <Button variant="outline" size="lg" className="px-8">
              View All Vehicles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RentVehicleSection;
