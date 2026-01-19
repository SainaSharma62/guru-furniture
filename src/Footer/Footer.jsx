import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              Guru <span className="text-yellow-400">Furniture</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Premium quality furniture crafted with comfort, style, and
              durability in mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-3 text-center text-2xl md:text-xl ">Quick Links</h3>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
               <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-3 text-center text-2xl md:text-xl md:text-left">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400 text-center md:text-left">
              <li>📍 Dabhaich, Tisiauta, Vaishali, Bihar</li>
              <li>📞 +91 75495 59247</li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4 text-center justify-center md:justify-start">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://wa.me/917549559247"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Guru Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
