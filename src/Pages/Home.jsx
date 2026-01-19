import Header from "../Components/Header";
import sofaImg from "../assets/sofa.png";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="mb-30">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Custom Wood & <br />
            <span className="text-yellow-400">Aluminium Works</span>
          </h1>

          <p className="mt-6 text-gray-200 max-w-md">
            We specialize in high-quality woodwork, aluminium fabrication,
            modular furniture, and complete interior solutions tailored to your
            space.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/services")}
              className="bg-yellow-400 text-black px-4 py-3 
              rounded font-medium hover:bg-yellow-500 cursor-pointer text-sm"
            >
              Our Services
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-end">
          <img
            src={sofaImg}
            alt="Wood & Aluminium Work"
            className="w-full max-w-lg md:max-w-xl
               drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]
               transition duration-300
               hover:drop-shadow-[0_28px_45px_rgba(0,0,0,0.45)]
               hover:-translate-y-1"
          />
        </div>
      </section>
    </div>
  );
}
