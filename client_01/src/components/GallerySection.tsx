import { useState } from "react";
import { MapPin } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://picsum.photos/id/106/1200/700",
      alt: "Traditional fisherman at Hikkaduwa",
      location: "Hikkaduwa, Sri Lanka",
      className: "col-span-2 row-span-1",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/101/1200/700",
      alt: "Sigiriya Rock Fortress",
      location: "Sigiriya, Sri Lanka",
      className: "col-span-1 row-span-2",
    },
    {
      id: 3,
      src: "https://picsum.photos/id/110/1200/700",
      alt: "Tea plantation in hill country",
      location: "Hill country, Sri Lanka",
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/111/1200/700",
      alt: "Sea turtle at coral reef",
      location: "Colombo, Sri Lanka",
      className: "col-span-1 row-span-2",
    },
    {
      id: 5,
      src: "https://picsum.photos/id/120/1200/700",
      alt: "Mountain landscape",
      location: "Hill country, Sri Lanka",
      className: "col-span-1 row-span-1",
    },
    {
      id: 6,
      src: "https://picsum.photos/id/121/1200/700",
      alt: "Meadow with flowers",
      location: "Hill country, Sri Lanka",
      className: "col-span-1 row-span-1",
    },
    {
      id: 7,
      src: "https://picsum.photos/id/122/1200/700",
      alt: "Valley view",
      location: "Hill country, Sri Lanka",
      className: "col-span-1 row-span-1",
    },
    {
      id: 8,
      src: "https://picsum.photos/id/123/1200/700",
      alt: "Valley view",
      location: "Hill country, Sri Lanka",
      className: "col-span-1 row-span-1",
    },
    {
      id: 9,
      src: "https://picsum.photos/id/124/1200/700",
      alt: "Valley view",
      location: "Hill country, Sri Lanka",
      className: "col-span-1 row-span-1",
    },
  ];

  // Prepare slides for lightbox
  const lightboxSlides = galleryImages.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.location,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-8 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                // Responsive className adjustments for mobile
                index === 0
                  ? "col-span-2 row-span-1" // First image spans 2 cols on all screens
                  : index === 1
                  ? "col-span-1 row-span-2 hidden md:block" // Hide tall image on mobile
                  : index === 3
                  ? "col-span-1 row-span-2 hidden md:block" // Hide tall image on mobile
                  : "col-span-1 row-span-1"
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Location Label (only for first image) */}
              {image.location && (
                <div className="absolute bottom-4 left-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm font-medium">{image.location}</span>
                </div>
              )}
            </div>
          ))}
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
    </section>
  );
};

export default GallerySection;
