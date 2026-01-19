import React from "react";
import Header from "../Components/Header";
import workshopImg from "../assets/workImage.jpg";
import workVideo from "../assets/workVedio.mp4";
import videoposter from "../assets/videoimg.jpg";
import story from "../assets/ourstory.jpeg";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-white min-h-screen">
      <Header />

      {/* Heading */}
      <section className="w-full px-6 py-12 text-center bg-primary-dark">
        <h1 className="font-bold text-2xl md:text-4xl">
          About <span className="text-yellow-400">Guru Furniture</span>
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          We are committed to delivering high-quality wood and aluminium
          furniture solutions tailored to your space and style.
        </p>
      </section>

      {/* Our Story */}
      <section
        className="max-w-7xl mx-auto px-6 py-12
                    flex flex-col md:flex-row
                    items-center gap-8"
      >
        <img
          src={story}
          alt="Our Workshop"
          className="w-full md:w-1/2 h-72 object-cover rounded-2xl shadow-lg mb-6 md:mb-0"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our <span className="text-yellow-400">Story</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Guru Furniture started as a small local workshop with a passion for
            quality furniture made from wood and aluminium.
          </p>
          <p className="text-gray-300">
            With years of hands-on experience, we create durable and functional
            designs that perfectly fit your needs.
          </p>
        </div>
      </section>

      {/* Our Workshop (replaced Meet Our Team) */}
      <section
        className="max-w-7xl mx-auto px-6 py-12
                    flex flex-col md:flex-row
                    items-center gap-10"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our <span className="text-yellow-400">Craftsmanship</span>
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            Watch how we carefully craft furniture with precision, hard work,
            and attention to detail.
            <br />
            From our small workshop to your home, each design reflects
            dedication, honesty, and skilled craftsmanship.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src={workVideo}
            controls
            className="w-full h-100 rounded-xl"
            poster={videoposter}
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section
        className="relative py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-white">
            Our Mission & Values
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-yellow-400">
                Quality First
              </h4>
              <p className="text-gray-200 text-sm">
                Premium materials and strong craftsmanship in every product.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-yellow-400">
                Honest Work
              </h4>
              <p className="text-gray-200 text-sm">
                Transparent pricing and reliable service you can trust.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-yellow-400">
                Customer Satisfaction
              </h4>
              <p className="text-gray-200 text-sm">
                We complete every project with care and on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Want Custom Furniture?</h2>
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
