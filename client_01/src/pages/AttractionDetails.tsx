import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Users,
  Calendar,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AttractionDetails = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Attraction data - in a real app, this would come from an API
  const attractionData = {
    "1": {
      id: 1,
      title: "Nine Arch Bridge",
      location: "Ella, Sri Lanka",
      rating: 4.9,
      category: "Culture",
      bestTime: "6:00 AM - 6:00 PM",
      duration: "2-3 hours",
      images: [
        {
          src: "https://picsum.photos/id/106/1200/700",
          alt: "Nine Arch Bridge surrounded by lush greenery",
          size: "large",
        },
        {
          src: "https://picsum.photos/id/101/1200/700",
          alt: "Train crossing the Nine Arch Bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/110/1200/700",
          alt: "View from below the bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/111/1200/700",
          alt: "Tea plantation views near the bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Tea plantation views near the bridge",
          size: "small",
        },
      ],
      shortDescription:
        "A stunning architectural marvel surrounded by lush tea plantations and tropical forests. This iconic railway bridge in Ella is one of Sri Lanka's most photographed landmarks.",
      fullDescription:
        "A stunning architectural marvel surrounded by lush tea plantations and tropical forests. This iconic railway bridge in Ella is one of Sri Lanka's most photographed landmarks. Built during the British colonial period, the Nine Arch Bridge showcases remarkable engineering without using any steel or concrete. The bridge spans 91 meters and stands 24 meters high, creating a perfect harmony between human ingenuity and natural beauty. Visitors can witness trains crossing this magnificent structure several times a day, creating picture-perfect moments against the backdrop of emerald tea estates and misty mountains. The bridge is easily accessible via a scenic walk through tea plantations and offers multiple viewpoints for photography enthusiasts.",
      highlights: [
        {
          icon: <Mountain className="w-5 h-5" />,
          title: "Scenic Architecture",
          description:
            "Historic railway bridge built without steel or concrete",
        },
        {
          icon: <Camera className="w-5 h-5" />,
          title: "Photography Hotspot",
          description: "One of Sri Lanka's most Instagram-worthy locations",
        },
        {
          icon: <TreePine className="w-5 h-5" />,
          title: "Tea Plantation Views",
          description:
            "Surrounded by lush green tea estates and tropical forests",
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Train Schedule",
          description:
            "Multiple daily train crossings for perfect photo opportunities",
        },
      ],
      facilities: [
        { icon: <Camera className="w-4 h-4" />, text: "Photography Friendly" },
        { icon: <TreePine className="w-4 h-4" />, text: "Nature Trails" },
        { icon: <Users className="w-4 h-4" />, text: "Guided Tours" },
      ],
      details: [
        { label: "Entry Fee", value: "Free" },
        { label: "Best Time", value: "6:00 AM - 6:00 PM" },
        { label: "Duration", value: "2-3 hours" },
        { label: "Difficulty", value: "Easy Walk" },
      ],
    },
    "2": {
      id: 2,
      title: "Mirissa Beach",
      location: "Mirissa, Sri Lanka",
      rating: 4.8,
      category: "Beaches",
      bestTime: "6:00 AM - 8:00 PM",
      duration: "Full Day",
      images: [
        {
          src: "https://picsum.photos/id/106/1200/700",
          alt: "Nine Arch Bridge surrounded by lush greenery",
          size: "large",
        },
        {
          src: "https://picsum.photos/id/101/1200/700",
          alt: "Train crossing the Nine Arch Bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/110/1200/700",
          alt: "View from below the bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/111/1200/700",
          alt: "Tea plantation views near the bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Tea plantation views near the bridge",
          size: "small",
        },
      ],
      shortDescription:
        "Golden sandy beaches perfect for whale watching and pristine sunset views. Mirissa is a tropical paradise offering crystal-clear waters and vibrant marine life.",
      fullDescription:
        "Golden sandy beaches perfect for whale watching and pristine sunset views. Mirissa is a tropical paradise offering crystal-clear waters and vibrant marine life. This crescent-shaped bay on Sri Lanka's southern coast is renowned for its spectacular whale watching opportunities, particularly blue whales and sperm whales. The beach features soft golden sand, gentle waves perfect for swimming, and coconut palms providing natural shade. Mirissa has evolved from a quiet fishing village into one of Sri Lanka's premier beach destinations while maintaining its laid-back charm. The area offers excellent surfing conditions, snorkeling opportunities, and some of the most breathtaking sunsets in the Indian Ocean. Local fishermen still operate from the beach, adding authentic cultural experiences to your visit.",
      highlights: [
        {
          icon: <Waves className="w-5 h-5" />,
          title: "Whale Watching",
          description: "Prime location for spotting blue whales and dolphins",
        },
        {
          icon: <Camera className="w-5 h-5" />,
          title: "Sunset Views",
          description: "Spectacular golden sunsets over the Indian Ocean",
        },
        {
          icon: <TreePine className="w-5 h-5" />,
          title: "Water Sports",
          description: "Surfing, snorkeling, and swimming in clear waters",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Beach Culture",
          description:
            "Authentic fishing village atmosphere with modern amenities",
        },
      ],
      facilities: [
        { icon: <Waves className="w-4 h-4" />, text: "Water Sports" },
        { icon: <Users className="w-4 h-4" />, text: "Beach Bars" },
        { icon: <Camera className="w-4 h-4" />, text: "Boat Tours" },
      ],
      details: [
        { label: "Entry Fee", value: "Free" },
        { label: "Best Time", value: "6:00 AM - 8:00 PM" },
        { label: "Duration", value: "Full Day" },
        { label: "Activities", value: "Swimming, Surfing, Whale Watching" },
      ],
    },
    "3": {
      id: 3,
      title: "Sigiriya Rock",
      location: "Sigiriya, Sri Lanka",
      rating: 4.9,
      category: "Culture",
      bestTime: "6:00 AM - 5:30 PM",
      duration: "3-4 hours",
      images: [
        {
          src: "https://picsum.photos/id/106/1200/700",
          alt: "Nine Arch Bridge surrounded by lush greenery",
          size: "large",
        },
        {
          src: "https://picsum.photos/id/101/1200/700",
          alt: "Train crossing the Nine Arch Bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/110/1200/700",
          alt: "View from below the bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/111/1200/700",
          alt: "Tea plantation views near the bridge",
          size: "small",
        },
        {
          src: "https://picsum.photos/id/120/1200/700",
          alt: "Tea plantation views near the bridge",
          size: "small",
        },
      ],
      shortDescription:
        "Ancient rock fortress offering breathtaking panoramic views and historical significance. This UNESCO World Heritage site showcases 5th-century royal palace ruins.",
      fullDescription:
        "Ancient rock fortress offering breathtaking panoramic views and historical significance. This UNESCO World Heritage site showcases 5th-century royal palace ruins. Rising 200 meters above the surrounding plains, Sigiriya is one of Sri Lanka's most spectacular archaeological sites. Built by King Kasyapa in the 5th century, this 'Lion Rock' served as a royal palace and fortress. The climb to the summit takes you past ancient frescoes, the famous Mirror Wall covered in ancient graffiti, and through the Lion's Gate with its massive carved paws. The summit reveals extensive palace ruins and offers 360-degree views of the surrounding countryside. The site also features remarkable water gardens, boulder gardens, and terraced gardens that demonstrate sophisticated ancient urban planning and hydraulic engineering.",
      highlights: [
        {
          icon: <Mountain className="w-5 h-5" />,
          title: "Ancient Palace",
          description: "5th-century royal palace ruins atop a 200m rock",
        },
        {
          icon: <Camera className="w-5 h-5" />,
          title: "Historic Frescoes",
          description: "Ancient paintings of celestial maidens",
        },
        {
          icon: <TreePine className="w-5 h-5" />,
          title: "Water Gardens",
          description: "Sophisticated ancient hydraulic engineering",
        },
        {
          icon: <Star className="w-5 h-5" />,
          title: "UNESCO Heritage",
          description: "World Heritage site of outstanding universal value",
        },
      ],
      facilities: [
        { icon: <Users className="w-4 h-4" />, text: "Guided Tours" },
        { icon: <Camera className="w-4 h-4" />, text: "Photography" },
        { icon: <TreePine className="w-4 h-4" />, text: "Nature Trails" },
      ],
      details: [
        { label: "Entry Fee", value: "$30 (Foreigners)" },
        { label: "Best Time", value: "6:00 AM - 5:30 PM" },
        { label: "Duration", value: "3-4 hours" },
        { label: "Difficulty", value: "Moderate Climb" },
      ],
    },
  };

  const attraction = attractionData[id as keyof typeof attractionData];

  // Prepare slides for lightbox
  const lightboxSlides =
    attraction?.images.map((image) => ({
      src: image.src,
      alt: image.alt,
      title: attraction.title + " - " + attraction.location,
    })) || [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Attraction not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <motion.div
        className="pt-nav"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <Link
              to="/#attractions"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Attractions
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            className="flex flex-col md:flex-row md:items-start md:justify-between mb-8"
            variants={itemVariants}
          >
            <div>
              <motion.h1
                className="text-4xl font-bold mb-2"
                variants={itemVariants}
              >
                {attraction.title}
              </motion.h1>
              <motion.div
                className="flex items-center gap-4 mb-4"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-semibold">{attraction.rating}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{attraction.location}</span>
                </div>
              </motion.div>
            </div>
            {/* <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              {attraction.category}
            </div> */}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image Gallery */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-8 h-[350px]"
                variants={itemVariants}
              >
                {/* Main Featured Image - Left Side */}
                <div className="lg:col-span-2 h-full">
                  <div
                    className="relative w-full h-full cursor-pointer group overflow-hidden rounded-md"
                    onClick={() => openLightbox(0)}
                  >
                    <img
                      src={attraction.images[0].src}
                      alt={attraction.images[0].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Image info overlay */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold drop-shadow-lg">
                        {attraction.title}
                      </h3>
                      <p className="text-sm text-white/90 drop-shadow-md">
                        {attraction.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Grid - Right Side */}
                <div className="lg:col-span-1 h-full">
                  <div className="grid grid-cols-2 gap-1 h-full">
                    {/* Top Left Thumbnail */}
                    {attraction.images[1] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(1)}
                      >
                        <img
                          src={attraction.images[1].src}
                          alt={attraction.images[1].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Top Right Thumbnail */}
                    {attraction.images[2] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(2)}
                      >
                        <img
                          src={attraction.images[2].src}
                          alt={attraction.images[2].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Bottom Left Thumbnail */}
                    {attraction.images[3] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(3)}
                      >
                        <img
                          src={attraction.images[3].src}
                          alt={attraction.images[3].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Bottom Right Thumbnail */}
                    {attraction.images[4] && (
                      <div
                        className="relative cursor-pointer group overflow-hidden rounded-md"
                        onClick={() => openLightbox(4)}
                      >
                        <img
                          src={attraction.images[4].src}
                          alt={attraction.images[4].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Description Section */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {showFullDescription
                    ? attraction.fullDescription
                    : attraction.shortDescription}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-primary hover:underline font-medium"
                >
                  {showFullDescription ? "Read less" : "Read more"}
                </button>
              </motion.div>

              {/* Highlights Section */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-6">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {attraction.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          {highlight.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              {/* <div className="text-center">
                <Link to="/contact">
                  <Button size="lg" className="px-12">
                    <Heart className="w-4 h-4 mr-2" />
                    Book Visit
                  </Button>
                </Link>
              </div> */}
            </div>

            {/* Right Column - Details & Info */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="bg-card border rounded-lg p-6 shadow-card sticky top-24">
                {/* Quick Details */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Quick Details</h3>
                  <div className="space-y-3">
                    {attraction.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-muted-foreground">
                          {detail.label}
                        </span>
                        <span className="text-sm font-medium">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Facilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {attraction.facilities.map((facility, index) => (
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

                {/* Best Time to Visit */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Best Time to Visit</h3>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {attraction.bestTime}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">{attraction.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        Excellent Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
      </motion.div>

      <Footer />
    </div>
  );
};

export default AttractionDetails;
