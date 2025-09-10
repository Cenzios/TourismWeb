# Travora API Responce 

## Attractions 

### 01.get all (public)
```json
{
  "data": [
    {
      "id": 1,
      "title": "Nine Arch Bridge",
      "description": "Experience the magic of blue-domed churches and stunning sunsets",
      "location": "Ella, Sri Lanka",
      "rating": 4.9,
      "image_url": "https://example.com/images/nine-arch-bridge.jpg",
      "details_url": "/places/1"
    }
  ],
  "pagination": {
    "total": 20,
    "page": 1,
    "limit": 3,
    "next": "/vehicles?page=2"
  }
}

```

### 02. details page (public) 

```json
{
  "data": {
    "id": 1,
    "title": "Nine Arch Bridge",
    "location": "Ella, Sri Lanka",
    "rating": 4.9,
    "main_image_url": "https://example.com/images/nine-arch-bridge-main.jpg",
    "gallery_images": [
      "https://example.com/images/nine-arch-1.jpg",
      "https://example.com/images/nine-arch-2.jpg",
      "https://example.com/images/nine-arch-3.jpg"
    ],
    "about": "Hidden in the misty hills of Ella, the Nine Arch Bridge is one of Sri Lanka’s most photographed landmarks. Built during the British colonial era using only stone and brick, this 30–meter–high bridge stretches elegantly across a lush green valley with nine grand arches. Surrounded by tea plantations and tropical forest, it offers breathtaking views and a magical atmosphere—especially when the iconic blue train passes by.",
    "tags": [
      { "id": 1, "name": "Tea Plantations", "icon": "GiTeaPot" },
      { "id": 2, "name": "Photography Haven", "icon": "FaCameraRetro" },
      { "id": 3, "name": "Train Spotting", "icon": "FaTrain" },
      { "id": 4, "name": "Beach Paradise", "icon": "FaUmbrellaBeach" },
      { "id": 5, "name": "Wildlife Safari", "icon": "GiLion" },
      { "id": 6, "name": "Mountain Hiking", "icon": "GiMountains" },
      { "id": 7, "name": "Historical Sites", "icon": "FaLandmark" },
      { "id": 8, "name": "Waterfalls", "icon": "GiWaterfall" },
      { "id": 9, "name": "Camping", "icon": "GiCampingTent" },
      { "id": 10, "name": "Spiritual Temples", "icon": "GiTempleGate" },
      { "id": 11, "name": "Street Food", "icon": "FaUtensils" },
      { "id": 12, "name": "Adventure Sports", "icon": "FaParachuteBox" },
      { "id": 13, "name": "Scenic Lakes", "icon": "GiFishingBoat" },
      { "id": 14, "name": "Local Culture", "icon": "GiDramaMasks" },
      { "id": 15, "name": "Shopping Spots", "icon": "FaShoppingBag" }
    ] 
  }
}

```

## Tour Plans

### 01. get all (public) 

```json
{
  "data": [
    {
      "tourId": "down-south-001",
      "title": "Down–South Tour",
      "location": "Ella, Sri Lanka",
      "duration": "3 days",
      "price": {
        "amount": 35000,
        "currency": "LKR",
        "perPerson": true
      },
      "image_url": "https://example.com/images/down-south-tour-1.jpg",
      "cta": {
        "label": "Book Now",
        "url": "/tour/down-south-001"
      }
    }
  ],
  "pagination": {
    "total": 20,
    "page": 1,
    "limit": 3,
    "next": "/vehicles?page=2"
  }
}

```

### 03. details page (public) 

```json
{
  "data": {
    "tourId": "down-south-001",
    "title": "Down–South Tour",
    "location": "Galle, Unawatuna, Mirissa",
    "main_image_url": "https://example.com/images/nine-arch-bridge-main.jpg",
    "images": [
      "https://example.com/images/galle-fort.jpg",
      "https://example.com/images/galle-street.jpg",
      "https://example.com/images/unawatuna-beach.jpg",
      "https://example.com/images/mirissa-view.jpg"
    ],
    "description": "Embark on a 5–day, 4–night adventure along Sri Lanka’s stunning southern coast. This tour takes you through pristine beaches, historic forts, vibrant local markets, and lush coastal landscapes. From the colonial charm of Galle Fort to the golden sands of Unawatuna and the breathtaking Mirissa...",
    "prices": [
      {
        "amount": 35000,
        "currency": "LKR",
        "person": "1" 
      },
      {
        "amount": 55000,
        "currency": "LKR",
        "person": "2" 
      },
      {
        "amount": 60000,
        "currency": "LKR",
        "person": "3"
      }
    ],
    "packageInclusion": [
      {
        "type": "Accommodation",
        "text": "4 nights stay in 3-star hotels with breakfast included"
      },
      {
        "type": "Meals",
        "text": "Daily breakfast and 2 special dinners at local restaurants"
      },
      {
        "type": "Transport",
        "text": "Air-conditioned vehicle with driver for all transfers and sightseeing"
      },
      {
        "type": "Guided Tours",
        "text": "Professional local guides for all major attractions"
      },
      {
        "type": "Activities",
        "text": "Whale watching, snorkeling, and cultural experiences as per itinerary"
      },
      {
        "type": "Entrance Fees",
        "text": "Tickets to Galle Fort, museums, and other included attractions"
      }
    ],
    "facilities": [
      {
        "id": 1,
        "name": "Comfortable Stay",
        "type": "FaHotel"
      },
      {
        "id": 2,
        "name": "Meals",
        "type": "FaUtensils"
      },
      {
        "id": 3,
        "name": "Transport",
        "type": "FaBus"
      },
      {
        "id": 4,
        "name": "Free Wi-Fi",
        "type": "FaWifi"
      },
      {
        "id": 5,
        "name": "Guided Tours",
        "type": "FaMapSigns"
      },
      {
        "id": 6,
        "name": "Adventure Activities",
        "type": "FaHiking"
      },
      {
        "id": 7,
        "name": "Airport Pickup/Drop",
        "type": "FaPlaneArrival"
      },
      {
        "id": 8,
        "name": "Travel Insurance",
        "type": "FaShieldAlt"
      },
      {
        "id": 9,
        "name": "Spa & Wellness",
        "type": "FaSpa"
      },
      {
        "id": 10,
        "name": "Cultural Experiences",
        "type": "FaTheaterMasks"
      },
      {
        "id": 11,
        "name": "Photography Spots",
        "type": "FaCameraRetro"
      },
      {
        "id": 12,
        "name": "Local Souvenirs",
        "type": "FaGift"
      },
      {
        "id": 13,
        "name": "Beach Access",
        "type": "FaUmbrellaBeach"
      },
      {
        "id": 14,
        "name": "Nightlife Experience",
        "type": "FaCocktail"
      },
      {
        "id": 15,
        "name": "Adventure Sports",
        "type": "FaParachuteBox"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Galle",
        "details": "Arrive in Colombo or Galle and check in to your hotel. Explore the iconic Galle Fort and Lighthouse, browse local cafes and shops, and end the day with a seaside dinner."
      },
      {
        "day": 2,
        "title": "Unawatuna & Beach",
        "details": "Enjoy breakfast before heading to Unawatuna Beach. Relax on the golden sands or try snorkeling and paddleboarding, then capture a stunning sunset by the shore."
      },
      {
        "day": 3,
        "title": "Mirissa & Whale Watching",
        "details": "Leave early for Mirissa and join an exciting whale watching tour. Savor a seafood lunch and visit Coconut Tree Hill for breathtaking ocean views."
      },
      {
        "day": 4,
        "title": "Departure",
        "details": "Have breakfast and check out from your hotel. Enjoy an optional city tour or shopping before drop-off at Colombo or Galle."
      }
    ],
    "cta": {
      "label": "Book Now",
      "url": "/book/down-south-001"
    }
  }
}

```

## Gallery Api 

### 01. image get all (public) 

```json

{
  "data": [
    {
      "location": "galle",
      "image_url": "https://example.com/images/nine-arch-1.jpg"
    },
    {
      "location": "galle",
      "image_url": "https://example.com/images/nine-arch-1.jpg"
    },
    {
      "location": "galle",
      "image_url": "https://example.com/images/nine-arch-1.jpg"
    },
    {
      "location": "galle",
      "image_url": "https://example.com/images/nine-arch-1.jpg"
    }
  ]
}

```
"pagination": {
    "total": 20,
    "page": 1,
    "limit": 3,
    "next": "/vehicles?page=2"
  }
## Vehicle

### 01. get all (public)

```json
{
  "data": [
    {
      "vehicleId": "veh-001",
      "name": "Toyota Prius",
      "type": "Sedan",
      "image": "https://example.com/images/vehicles/toyota-prius-sedan.jpg",
      "specs": {
        "fuelCapacity": "80L",
        "transmission": "Manual",
        "seatingCapacity": 5
      },
      "price": {
        "amount": 12000,
        "currency": "LKR",
        "per": "day"
      },
      "cta": {
        "label": "Call Now",
        "phone": "+94 77 123 4567"
      }
    }
  ],
  "pagination": {
    "total": 20,
    "page": 1,
    "limit": 3,
    "next": "/vehicles?page=2"
  }
}

```

### 02. details page (public) 

```json
{
  "data": {
    "mainVehicle": {
      "name": "Toyota Prius 2023",
      "price": "Rs 20,000",
      "features": {
        "fuelCapacity": "80L",
        "transmission": "Manual",
        "seating": "5 People"
      },
      "description": [
        "CAB - xxxx",
        "Long-term or short-term rental for an executive position or company.",
        "450,000/- per month",
        "Call for more details."
      ],
      "main_image_url": "https://example.com/images/nine-arch-bridge-main.jpg",
      "images": [
        "images/prius-front.png",
        "images/prius-side.png",
        "images/prius-back.png",
        "images/prius-interior.png",
        "images/prius-angle.png"
      ]
    },
    "moreVehicles": [
      {
        "name": "Toyota Prius",
        "variant": "Sedan",
        "price": "Rs 12000/day",
        "features": {
          "fuelCapacity": "80L",
          "transmission": "Manual",
          "seating": "5 People"
        },
        "image": "images/sedan.png"
      },
      {
        "name": "Toyota Prius",
        "variant": "Hatchback",
        "price": "Rs 12000/day",
        "features": {
          "fuelCapacity": "80L",
          "transmission": "Manual",
          "seating": "5 People"
        },
        "image": "images/hatchback.png"
      },
      {
        "name": "Toyota Prius",
        "variant": "Van",
        "price": "Rs 12000/day",
        "features": {
          "fuelCapacity": "80L",
          "transmission": "Manual",
          "seating": "9 People"
        },
        "image": "images/van.png"
      }
    ]
  }
}
```
