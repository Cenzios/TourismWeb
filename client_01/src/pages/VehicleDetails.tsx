import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ArrowLeft,
  Fuel,
  Users,
  Settings,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Zap,
  Navigation as NavigationIcon,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VehicleDetails = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Vehicle data - in a real app, this would come from an API
  const vehicleData = {
    "1": {
      id: 1,
      model: "Toyota Prius",
      year: "2023",
      type: "Sedan",
      licensePlate: "CAB - 1234",
      dailyPrice: "Rs 12,000",
      monthlyPrice: "Rs 360,000",
      priceUnit: "day",
      images: [
        {
          src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop",
          alt: "Toyota Prius 2023 - Front view",
        },
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
          alt: "Toyota Prius 2023 - Side view",
        },
        {
          src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
          alt: "Toyota Prius 2023 - Rear view",
        },
        {
          src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
          alt: "Toyota Prius 2023 - Interior view",
        },
      ],
      specs: {
        fuel: "80L",
        transmission: "Manual",
        capacity: "5 People",
      },
      description:
        "Perfect for executives and companies looking for reliable transportation. This Toyota Prius 2023 offers excellent fuel efficiency and comfort for both short-term and long-term rentals. Ideal for business meetings, airport transfers, and city commuting.",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "Full Insurance" },
        {
          icon: <NavigationIcon className="w-4 h-4" />,
          text: "GPS Navigation",
        },
        { icon: <Zap className="w-4 h-4" />, text: "Air Conditioning" },
      ],
      pickupLocations: ["Colombo Airport", "City Center", "Hotel Pickup"],
    },
    "2": {
      id: 2,
      model: "Honda Civic",
      year: "2023",
      type: "Hatchback",
      licensePlate: "CAB - 5678",
      dailyPrice: "Rs 10,000",
      monthlyPrice: "Rs 300,000",
      priceUnit: "day",
      images: [
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=500&fit=crop",
          alt: "Honda Civic 2023 - Front view",
        },
        {
          src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
          alt: "Honda Civic 2023 - Side view",
        },
        {
          src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
          alt: "Honda Civic 2023 - Rear view",
        },
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
          alt: "Honda Civic 2023 - Interior view",
        },
      ],
      specs: {
        fuel: "60L",
        transmission: "Manual",
        capacity: "5 People",
      },
      description:
        "Compact and efficient hatchback perfect for city driving and urban commuting. The Honda Civic offers excellent maneuverability in tight spaces while maintaining comfort for up to 5 passengers. Great choice for personal and business use.",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "Full Insurance" },
        {
          icon: <NavigationIcon className="w-4 h-4" />,
          text: "GPS Navigation",
        },
        { icon: <Zap className="w-4 h-4" />, text: "Air Conditioning" },
      ],
      pickupLocations: ["Colombo Airport", "City Center", "Hotel Pickup"],
    },
    "3": {
      id: 3,
      model: "Toyota Hiace",
      year: "2023",
      type: "Van",
      licensePlate: "CAB - 9012",
      dailyPrice: "Rs 18,000",
      monthlyPrice: "Rs 540,000",
      priceUnit: "day",
      images: [
        {
          src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
          alt: "Toyota Hiace 2023 - Front view",
        },
        {
          src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
          alt: "Toyota Hiace 2023 - Side view",
        },
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
          alt: "Toyota Hiace 2023 - Rear view",
        },
        {
          src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
          alt: "Toyota Hiace 2023 - Interior view",
        },
      ],
      specs: {
        fuel: "100L",
        transmission: "Manual",
        capacity: "9 People",
      },
      description:
        "Spacious van perfect for group travel, family outings, and corporate transportation. The Toyota Hiace accommodates up to 9 passengers with ample luggage space. Ideal for airport transfers, tour groups, and large family trips.",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "Full Insurance" },
        {
          icon: <NavigationIcon className="w-4 h-4" />,
          text: "GPS Navigation",
        },
        { icon: <Zap className="w-4 h-4" />, text: "Air Conditioning" },
      ],
      pickupLocations: ["Colombo Airport", "City Center", "Hotel Pickup"],
    },
  };

  // Related vehicles (other vehicles in the same category or similar)
  const relatedVehicles = [
    {
      id: 1,
      model: "Toyota Prius",
      type: "Sedan",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      specs: { fuel: "80L", transmission: "Manual", capacity: "5 People" },
      price: "Rs 12,000",
      priceUnit: "day",
    },
    {
      id: 2,
      model: "Honda Civic",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      specs: { fuel: "60L", transmission: "Manual", capacity: "5 People" },
      price: "Rs 10,000",
      priceUnit: "day",
    },
    {
      id: 3,
      model: "Toyota Hiace",
      type: "Van",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      specs: { fuel: "100L", transmission: "Manual", capacity: "9 People" },
      price: "Rs 18,000",
      priceUnit: "day",
    },
  ];

  const vehicle = vehicleData[id as keyof typeof vehicleData];

  // Prepare slides for lightbox
  const lightboxSlides =
    vehicle?.images.map((image) => ({
      src: image.src,
      alt: image.alt,
      title: vehicle.model + " " + vehicle.year + " - " + vehicle.type,
    })) || [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-nav">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            to="/#vehicles"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Vehicles
          </Link>

          {/* Main Vehicle Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Images */}
              <div>
                {/* Main Image */}
                <div className="mb-4">
                  <img
                    src={vehicle.images[selectedImageIndex].src}
                    alt={vehicle.images[selectedImageIndex].alt}
                    className="w-full h-80 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(selectedImageIndex)}
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-3">
                  {vehicle.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      onDoubleClick={() => openLightbox(index)}
                      className={`flex-1 h-20 rounded-md overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? "border-primary"
                          : "border-transparent hover:border-border"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column - Details */}
              <div>
                {/* Title & Specs */}
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-2">
                    {vehicle.model} {vehicle.year}
                  </h1>
                  <div className="text-lg text-muted-foreground mb-4">
                    {vehicle.type}
                  </div>

                  {/* Specs Icons */}
                  <div className="flex gap-8 mb-6">
                    <div className="flex items-center gap-2">
                      <Fuel className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">{vehicle.specs.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">
                        {vehicle.specs.transmission}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">
                        {vehicle.specs.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {vehicle.dailyPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      per day | Monthly: {vehicle.monthlyPrice}
                    </div>
                  </div>
                </div>

                {/* Description Box */}
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <div className="mb-3">
                    <span className="font-semibold">
                      {vehicle.licensePlate}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Long-term or short-term rental for executives or companies.
                    <br />
                    <span className="font-medium">
                      Monthly rate: {vehicle.monthlyPrice}/-
                    </span>
                    <br />
                    Call for more details and special rates.
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Included Features</h3>
                  <div className="flex flex-wrap gap-3">
                    {vehicle.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                      >
                        {feature.icon}
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pickup Locations */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Pickup Locations</h3>
                  <div className="space-y-2">
                    {vehicle.pickupLocations.map((location, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button size="lg" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>
                  {/* <Link to="/contact" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Check Availability
                    </Button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* More Vehicles Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">More Vehicles</h2>
              <Link to="/#vehicles">
                <Button variant="outline" className="rounded-full">
                  View All Vehicles
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedVehicles.map((relatedVehicle) => (
                <Link
                  key={relatedVehicle.id}
                  to={`/vehicle/${relatedVehicle.id}`}
                  className="block"
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                    <div className="relative">
                      <img
                        src={relatedVehicle.image}
                        alt={relatedVehicle.model}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium">
                          {relatedVehicle.type}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-center">
                        {relatedVehicle.model}
                      </h3>

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <Fuel
                            className="mx-auto mb-2 text-muted-foreground"
                            size={20}
                          />
                          <div className="text-sm font-medium">
                            {relatedVehicle.specs.fuel}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Fuel
                          </div>
                        </div>
                        <div className="text-center">
                          <Settings
                            className="mx-auto mb-2 text-muted-foreground"
                            size={20}
                          />
                          <div className="text-sm font-medium">
                            {relatedVehicle.specs.transmission}
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
                            {relatedVehicle.specs.capacity}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Capacity
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-6">
                        <span className="text-2xl font-bold text-primary">
                          {relatedVehicle.price}
                        </span>
                        <span className="text-muted-foreground">
                          /{relatedVehicle.priceUnit}
                        </span>
                      </div>

                      <Link to="/contact">
                        <Button variant="pill" className="w-full">
                          Call Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={lightboxSlides}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, .9)" },
            }}
            carousel={{
              finite: true,
            }}
            render={{
              buttonPrev: () => null,
              buttonNext: () => null,
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VehicleDetails;
