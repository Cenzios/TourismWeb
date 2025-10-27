import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Utensils,
  Home,
  Car,
  Calendar,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const TourDetails = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Tour data - in a real app, this would come from an API
  const tourData = {
    "1": {
      id: 1,
      title: "Down-South Tour",
      location: "Galle, Unawatuna, Mirissa",
      duration: "3 days",
      price: "Rs 35,000",
      priceUnit: "Person",
      images: [
        {
          src: "https://picsum.photos/id/99/1200/700",
          alt: "Aerial view of Galle Fort and coastline",
          size: "large",
        },
        {
          src: "https://picsum.photos/id/101/1200/700",
          alt: "Street scene in Galle",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/110/1200/700",
          alt: "Palm trees on beach",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/111/1200/700",
          alt: "Crystal clear beach water",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Beach view",
          size: "small",
        },
      ],
      shortDescription:
        "Experience the best of Sri Lanka's southern coast with this 3-day adventure through Galle, Unawatuna, and Mirissa. Discover historic forts, pristine beaches, and vibrant local culture.",
      fullDescription:
        "Experience the best of Sri Lanka's southern coast with this 3-day adventure through Galle, Unawatuna, and Mirissa. Discover historic forts, pristine beaches, and vibrant local culture. This comprehensive tour takes you through UNESCO World Heritage sites, world-class beaches perfect for swimming and snorkeling, and authentic local markets where you can experience the true spirit of Sri Lankan hospitality. Our expert guides will share fascinating stories about the region's colonial history, marine life, and cultural traditions that have been preserved for centuries.",
      inclusions: [
        {
          icon: <Calendar className="w-4 h-4" />,
          text: "3 Days - 2 Nights (1 night Galle, 1 night Unawatuna)",
        },
        {
          icon: <Utensils className="w-4 h-4" />,
          text: "Daily breakfast included",
        },
      ],
      facilities: [
        { icon: <Home className="w-4 h-4" />, text: "Comfortable Stay" },
        { icon: <Utensils className="w-4 h-4" />, text: "Meals" },
        { icon: <Car className="w-4 h-4" />, text: "Transport" },
      ],
      itinerary: [
        {
          day: "01",
          title: "Arrival & Galle",
          description:
            "Check-in to your accommodation and begin exploring the historic Galle Fort. Visit the iconic lighthouse, stroll through colonial streets, enjoy local cafes, and end with a seaside dinner overlooking the Indian Ocean.",
        },
        {
          day: "02",
          title: "Unawatuna & Beach",
          description:
            "Start with breakfast before heading to the famous Unawatuna Beach. Enjoy snorkeling in crystal-clear waters, try paddleboarding, relax on golden sands, and witness a spectacular sunset from the beach.",
        },
        {
          day: "03",
          title: "Mirissa & Departure",
          description:
            "Begin with an exciting whale watching tour from Mirissa harbor. Enjoy a fresh seafood lunch, visit Coconut Tree Hill for panoramic views, and conclude your tour with departure to Colombo.",
        },
      ],
    },
    "2": {
      id: 2,
      title: "Cultural Triangle",
      location: "Sigiriya, Dambulla, Polonnaruwa",
      duration: "4 days",
      price: "Rs 45,000",
      priceUnit: "Person",
      images: [
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Beach view",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/101/1200/700",
          alt: "Ancient Sigiriya Rock Fortress",
          size: "large",
        },
        {
          src: "https://picsum.photos/id/110/1200/700",
          alt: "Dambulla Cave Temple",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/111/1200/700",
          alt: "Ancient ruins at Polonnaruwa",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Buddha statue in temple",
          size: "small",
        },
      ],
      shortDescription:
        "Explore Sri Lanka's ancient heritage through the Cultural Triangle. Visit UNESCO World Heritage sites including Sigiriya Rock Fortress, Dambulla Cave Temple, and the ancient city of Polonnaruwa.",
      fullDescription:
        "Explore Sri Lanka's ancient heritage through the Cultural Triangle. Visit UNESCO World Heritage sites including Sigiriya Rock Fortress, Dambulla Cave Temple, and the ancient city of Polonnaruwa. This journey through time takes you to some of the most significant archaeological sites in South Asia, where ancient kings built magnificent palaces, carved intricate cave temples, and created elaborate irrigation systems that still function today. Experience the spiritual atmosphere of centuries-old temples, climb the famous Lion Rock, and walk through ancient royal gardens that showcase the sophisticated urban planning of ancient Sri Lankan civilizations.",
      inclusions: [
        {
          icon: <Calendar className="w-4 h-4" />,
          text: "4 Days - 3 Nights (2 nights Sigiriya, 1 night Polonnaruwa)",
        },
        { icon: <Utensils className="w-4 h-4" />, text: "All meals included" },
      ],
      facilities: [
        { icon: <Home className="w-4 h-4" />, text: "Heritage Hotels" },
        { icon: <Utensils className="w-4 h-4" />, text: "Local Cuisine" },
        { icon: <Car className="w-4 h-4" />, text: "Air-con Vehicle" },
      ],
      itinerary: [
        {
          day: "01",
          title: "Arrival & Dambulla",
          description:
            "Arrive and check-in to your hotel near Sigiriya. Visit the magnificent Dambulla Cave Temple complex with its ancient Buddhist murals and statues. Evening at leisure exploring local markets.",
        },
        {
          day: "02",
          title: "Sigiriya Rock Fortress",
          description:
            "Early morning climb of the iconic Sigiriya Rock Fortress. Explore the ancient palace ruins, famous frescoes, and mirror wall. Afternoon visit to Sigiriya Museum and royal gardens.",
        },
        {
          day: "03",
          title: "Polonnaruwa Ancient City",
          description:
            "Travel to Polonnaruwa and explore the ancient capital's ruins including Gal Vihara, Lotus Bath, and Royal Palace complex. Bicycle tour through the archaeological park.",
        },
        {
          day: "04",
          title: "Village Experience & Departure",
          description:
            "Experience authentic village life with a traditional breakfast, bullock cart ride, and catamaran ride on village lake. Return journey to Colombo with lunch en route.",
        },
      ],
    },
    "3": {
      id: 3,
      title: "Hill Country Explorer",
      location: "Kandy, Nuwara Eliya, Ella",
      duration: "5 days",
      price: "Rs 55,000",
      priceUnit: "Person",
      images: [
        {
          src: "https://picsum.photos/id/110/1200/700",
          alt: "Tea plantations in misty hills",
          size: "large",
        },
        {
          src: "https://picsum.photos/id/111/1200/700",
          alt: "Nine Arch Bridge in Ella",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Temple of Tooth in Kandy",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/121/1200/700",
          alt: "Misty mountain landscape",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Beach view",
          size: "small",
        },
      ],
      shortDescription:
        "Journey through Sri Lanka's stunning hill country, visiting tea plantations, colonial hill stations, and scenic railways. Experience the cool climate and breathtaking mountain vistas.",
      fullDescription:
        "Journey through Sri Lanka's stunning hill country, visiting tea plantations, colonial hill stations, and scenic railways. Experience the cool climate and breathtaking mountain vistas of the central highlands. This tour takes you through emerald tea estates where you'll learn about Ceylon tea production, ride on one of the world's most scenic train routes, and explore charming colonial-era towns nestled in the mountains. From the cultural capital of Kandy to the 'Little England' of Nuwara Eliya and the hipster paradise of Ella, discover the diverse landscapes and rich heritage of Sri Lanka's hill country.",
      inclusions: [
        {
          icon: <Calendar className="w-4 h-4" />,
          text: "5 Days - 4 Nights (1 night Kandy, 2 nights Nuwara Eliya, 1 night Ella)",
        },
        {
          icon: <Utensils className="w-4 h-4" />,
          text: "Breakfast and dinner included",
        },
      ],
      facilities: [
        { icon: <Home className="w-4 h-4" />, text: "Mountain Resorts" },
        {
          icon: <Utensils className="w-4 h-4" />,
          text: "Local & International",
        },
        { icon: <Car className="w-4 h-4" />, text: "Mountain Transport" },
      ],
      itinerary: [
        {
          day: "01",
          title: "Kandy Cultural Capital",
          description:
            "Arrive in Kandy and check-in to your hotel. Visit the Temple of the Tooth Relic, explore Kandy Lake, and enjoy a traditional cultural dance performance in the evening.",
        },
        {
          day: "02",
          title: "Nuwara Eliya Journey",
          description:
            "Scenic drive to Nuwara Eliya with stops at tea factories and Ramboda Falls. Check-in to colonial-style accommodation and explore the town known as 'Little England'.",
        },
        {
          day: "03",
          title: "Tea Plantation Experience",
          description:
            "Visit working tea plantations, learn about tea processing from leaf to cup, enjoy tea tasting sessions, and explore the beautiful Hakgala Botanical Gardens.",
        },
        {
          day: "04",
          title: "Scenic Train to Ella",
          description:
            "Take the famous scenic train ride from Nanu Oya to Ella through misty mountains and tea estates. Visit Nine Arch Bridge and explore Ella town.",
        },
        {
          day: "05",
          title: "Ella Exploration & Departure",
          description:
            "Early morning hike to Little Adam's Peak for sunrise views. Visit Ravana Falls and cave temple before departing to Colombo via the southern route.",
        },
      ],
    },
  };

  const tour = tourData[id as keyof typeof tourData];

  // Prepare slides for lightbox
  const lightboxSlides =
    tour?.images.map((image) => ({
      src: image.src,
      alt: image.alt,
      title: tour.title + " - " + tour.location,
    })) || [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour not found</h1>
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

      <div className="pt-24">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-coral-orange mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">{tour.location}</span>
              </div>
            </div>
            <Link to="/contact" className="mt-4 md:mt-0">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image Gallery */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-8 h-[350px]">
                {/* Main Featured Image - Left Side */}
                <div className="lg:col-span-2 h-full">
                  <div
                    className="relative w-full h-full cursor-pointer group overflow-hidden rounded-md"
                    onClick={() => openLightbox(0)}
                  >
                    <img
                      src={tour.images[0].src}
                      alt={tour.images[0].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Image info overlay */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold drop-shadow-lg">
                        {tour.title}
                      </h3>
                      <p className="text-sm text-white/90 drop-shadow-md">
                        {tour.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Grid - Right Side */}
                <div className="lg:col-span-1 h-full">
                  <div className="grid grid-cols-2 gap-1 h-full">
                    {/* Top Left Thumbnail */}
                    {tour.images[1] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(1)}
                      >
                        <img
                          src={tour.images[1].src}
                          alt={tour.images[1].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Top Right Thumbnail */}
                    {tour.images[2] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(2)}
                      >
                        <img
                          src={tour.images[2].src}
                          alt={tour.images[2].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Bottom Left Thumbnail */}
                    {tour.images[3] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(3)}
                      >
                        <img
                          src={tour.images[3].src}
                          alt={tour.images[3].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Bottom Right - View All Button */}
                    {tour.images[4] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(3)}
                      >
                        <img
                          src={tour.images[3].src}
                          alt={tour.images[3].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {showFullDescription
                    ? tour.fullDescription
                    : tour.shortDescription}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-primary hover:underline font-medium"
                >
                  {showFullDescription ? "Read less" : "Read more"}
                </button>
              </div>

              {/* Itinerary Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="flex gap-4">
                      {/* Day Badge */}
                      <div className="flex-shrink-0">
                        <div className="flex flex-col w-14 h-14 bg-primary text-primary-foreground rounded-full items-center justify-center font-bold text-xs">
                          <span className="text-sm">Day</span>
                          <span className="text-sm">{day.day}</span>
                        </div>
                        {index < tour.itinerary.length - 1 && (
                          <div className="w-px h-12 bg-border mx-auto mt-2"></div>
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex-1 pb-6">
                        <h3 className="text-lg font-semibold mb-2">
                          {day.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="text-center">
                <Link to="/contact">
                  <Button size="lg" className="px-12">
                    Book Now
                  </Button>
                </Link>
              </div> */}
            </div>

            {/* Right Column - Pricing & Details */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 shadow-card sticky top-24">
                {/* Package Price */}
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Package price
                  </p>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {tour.price}/-
                  </div>
                  <p className="text-sm text-muted-foreground">
                    per {tour.priceUnit.toLowerCase()}
                  </p>
                </div>

                {/* Package Inclusion */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Package Inclusion</h3>
                  <div className="space-y-3">
                    {tour.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-primary mt-0.5">
                          {inclusion.icon}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {inclusion.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Facilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {tour.facilities.map((facility, index) => (
                      <div
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                      >
                        {facility.icon}
                        {facility.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Duration
                    </div>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Tours Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between my-8">
              <h2 className="text-3xl font-bold">More Tours</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Down-South Tour",
                  location: "Galle, Unawatuna, Mirissa",
                  duration: "3 days",
                  price: "Rs 35,000",
                  image: "https://picsum.photos/id/99/400/300",
                },
                {
                  id: 2,
                  title: "Cultural Triangle",
                  location: "Sigiriya, Dambulla, Polonnaruwa",
                  duration: "4 days",
                  price: "Rs 45,000",
                  image: "https://picsum.photos/id/101/400/300",
                },
                {
                  id: 3,
                  title: "Hill Country Explorer",
                  location: "Kandy, Nuwara Eliya, Ella",
                  duration: "5 days",
                  price: "Rs 55,000",
                  image: "https://picsum.photos/id/110/400/300",
                },
              ]
                .filter((item) => item.id !== tour.id)
                .map((relatedTour) => (
                  <div key={relatedTour.id} className="group">
                    <Link to={`/tour/${relatedTour.id}`} className="block">
                      <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer">
                        <div className="relative">
                          <img
                            src={relatedTour.image}
                            alt={relatedTour.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium">
                              {relatedTour.duration}
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {relatedTour.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                              {relatedTour.location}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-bold text-primary">
                              {relatedTour.price}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">
                                {relatedTour.duration}
                              </span>
                            </div>
                          </div>

                          <Link to="/contact">
                            <Button variant="pill" className="w-full">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
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

      {/* Mobile Back Button */}
      <BackButton to="/" text="Back to Home" />
    </div>
  );
};

export default TourDetails;
