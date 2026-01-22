import React from "react";
import Header from "../Components/Header";

import img1 from "../assets/gallery/wood.jpg";
import img2 from "../assets/gallery/wood1.jpg";
import img3 from "../assets/gallery/Alimunium.jpg";
import img4 from "../assets/gallery/Alimunium1.jpg";
import img5 from "../assets/gallery/kitchen1.jpg";
import img6 from "../assets/gallery/kitchen.jpg";
import img7 from "../assets/gallery/aludoors.jpeg";
import img8 from "../assets/gallery/chair.jpeg";
import img9 from "../assets/gallery/dracing.jpeg";
import img10 from "../assets/gallery/door.jpeg";
import img11 from "../assets/gallery/window.jpeg";

export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />

      {/* Page Heading */}
      <section
        className="max-w-full mx-auto px-6 py-12 text-center bg-primary-dark"
      >
        <h1 className="text-3xl md:text-4xl font-bold sm:text-xl">
          Our <span className="text-yellow-400">Gallery</span>
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
          A glimpse of our craftsmanship in wood and aluminium work.
        </p>
      </section>

      {/* Gallery Grid */}
      <section
        className="max-w-7xl mx-auto px-6 pb-20 mt-12
                          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover
                         transition-transform duration-500
                         group-hover:scale-110"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
