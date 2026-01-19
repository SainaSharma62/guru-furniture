import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import About from "./Pages/About.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Contact from "./Pages/Contact.jsx";

const routeDefinitions = createRoutesFromElements(
 <Route path="/" element={<App />}>
  <Route index element={<Home />} />   {/* default page */}
  <Route path="services" element={<Services />} />
  <Route path="about" element={<About />} />
  <Route path="gallery" element={<Gallery />} />
  <Route path="contact" element={<Contact />} />
</Route>

);

const appRouter = createBrowserRouter(routeDefinitions);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
