import React from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center justify-center">
        <div className="bg-secondary rounded-lg shadow-lg h-30">
          <h3 className="font-semibold text-xl mb-2">Address</h3>
          <p className="text-gray-300">
            📍 Dabhaich, Tisiauta, Vaishali, Bihar
          </p>
        </div>
        <div className="bg-secondary rounded-lg shadow-lg h-30">
          <h3 className="font-semibold text-xl mb-2">Phone</h3>
          <p className="text-gray-300">📞 +91 75495 59247</p>
        </div>
        <div className="bg-secondary rounded-lg shadow-lg h-30">
          <h3 className="font-semibold text-xl mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/917549559247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:text-green-600"
            title="Chat with us on WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
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
