// import Navbar from "../Components/NavBar.jsx";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="w-full bg-primary text-white">
//       <div className="max-w-7xl mx-auto  px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-semibold tracking-wide ">
//           <NavLink
//             to="/"
//           >
//             <h1 className="text-3xl">गुरु </h1>
//             <span className="text-accent ml-8">Furniture</span>
//           </NavLink>
//         </div>

//         {/* Navbar */}
//         <Navbar />

//         {/* Mobile Menu Placeholder */}
//         <div className="md:hidden text-xl cursor-pointer">☰</div>
//       </div>
//     </header>
//   );
// }

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="leading-tight">
          <h1 className="text-3xl font-semibold">गुरु</h1>
          <span className="text-accent ml-6 text-2xl">Furniture</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className="hover:text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/services" className="hover:text-yellow-400">
            Services
          </NavLink>
          <NavLink to="/gallery" className="hover:text-yellow-400">
            Gallery
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow-400">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-dark px-6 pb-4 space-y-4 text-sm text-center">
          <NavLink onClick={() => setMenuOpen(false)} to="/" className="block">
            Home
          </NavLink>

          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/services"
            className="block"
          >
            Services
          </NavLink>

          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/gallery"
            className="block"
          >
            Gallery
          </NavLink>

          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/about"
            className="block"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="block"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
