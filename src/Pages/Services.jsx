import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import serviceBg from "../assets/interior.jpg";
import alu from "../assets/gallery/al.jpeg";
import wood from "../assets/gallery/wood2.jpg";
import image from "../assets/gallery/image.png";
import deliveryImg from "../assets/diliver.png";
import qualityImg from "../assets/quality.png";
import team from "../assets/team.png";
import interior from "../assets/gallery/interior.jpeg";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />

      {/* Page Heading */}
      <section
        className="max-w-8xl h-100 mx-auto px-6 py-20 text-center relative overflow-hidden "
        style={{
          backgroundImage: `url(${serviceBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            We provide complete wood and aluminium solutions with custom
            designs, quality materials, and professional installation.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 mt-10">
        {/* Wood Work */}
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
          <img
            src={wood}
            alt="Wood Work"
            className="h-100 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Wood Work
            </h3>
            <p className="text-gray-300 text-sm">
              Custom wooden furniture, doors, wardrobes, beds, kitchens and
              interior solutions crafted with premium quality wood.
            </p>
          </div>
        </div>

        {/* Aluminium Work */}
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
          <img
            src={alu}
            alt="Aluminium Work"
            className="h-100 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Aluminium Work
            </h3>
            <p className="text-gray-300 text-sm">
              Aluminium windows, partitions, cabinets and modern designs with
              strong structure and long life.
            </p>
          </div>
        </div>

        {/* Modular Furniture */}
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt="Modular Furniture"
            className="h-100 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Modular Furniture
            </h3>
            <p className="text-gray-300 text-sm">
              Modular kitchens, wardrobes, office furniture designed for modern
              lifestyle and space optimization.
            </p>
          </div>
        </div>

        {/* Custom Design */}
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
          <img
            src={interior}
            alt="Custom Design"
            className="h-100 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Custom Design & Installation
            </h3>
            <p className="text-gray-300 text-sm">
              Personalized designs as per your space, budget and complete
              on-site installation support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16">
         <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-yellow-400">Choose Us</span>
          </h1>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
         
          <div className="bg-primary rounded-xl shadow-lg p-6">
            <img
              src={qualityImg}
              alt="Premium Quality"
              className="w-[70] h-[60] object-contain mx-auto mb-4"
            />
            <h4 className="font-semibold mb-2 text-xl">Premium Quality</h4>
            <p className="text-yellow-400 text-sm font-bold">
              We use high-quality wood and aluminium for long-lasting results.
            </p>
          </div>

          <div className="bg-primary rounded-xl shadow-lg p-6">
            <img
              src={team}
              alt="Experienced Team"
              className="w-[70] h-[60] mx-auto mb-4"
            />
            <h4 className="font-semibold mb-2 text-xl">Experienced Team</h4>
            <p className=" text-yellow-400 text-sm font-bold">
              Skilled professionals with years of experience.
            </p>
          </div>

          <div className="bg-primary rounded-xl shadow-lg p-6">
            <img
              src={deliveryImg}
              alt="On-Time Delivery"
              className="w-[70] h-[60] mx-auto mb-4"
            />
            <h4 className="font-semibold mb-2 text-xl">On-Time Delivery</h4>
            <p className=" text-yellow-400 text-sm font-bold">
              We ensure timely completion of every project.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Looking for Custom Furniture?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="bg-yellow-400 text-black px-8 py-3 rounded font-medium hover:bg-yellow-500 cursor-pointer"
        >
          Contact Us Today
        </button>
      </section>
    </div>
  );
}
