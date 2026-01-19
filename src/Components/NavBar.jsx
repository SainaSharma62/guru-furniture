import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        Gallery
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
