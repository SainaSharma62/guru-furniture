import React from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import contactBg from "../assets/contactbg.jpg";

export default function Contact() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Header />

      {/* Page Heading */}
      <section className="max-w-full mx-auto px-6 py-10 text-center bg-primary-dark">
        <h1 className="text-2xl font-bold md:text-4xl">
          Contact <span className="text-yellow-400">Guru Furniture</span>
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Have questions or want a custom quote? Reach out to us anytime.
        </p>
      </section>

      {/* Contact Info */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg 
                      transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-xl text-yellow-400 mb-2">
                Address
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Dabhaich, Tisiauta,
                <br /> Vaishali, Bihar
              </p>
            </div>

            {/* Phone */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg 
                      transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-xl text-yellow-400 mb-2">
                Phone
              </h3>
              <p className="text-gray-200 text-sm">+91 75495 59247</p>
            </div>

            {/* WhatsApp */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg 
                      transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 text-green-400">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <h3 className="font-semibold text-xl text-yellow-400 mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/917549559247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 text-sm font-medium"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.053701500695!2d85.50659211506173!3d25.8007472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed71000990ab4d%3A0xb8fe5a21c7c8ec3a!2sGuru%20Furniture%20and%20Aluminyam%20Wark%20Shop!5e0!3m2!1sen!2sin!4v1705462054652!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
