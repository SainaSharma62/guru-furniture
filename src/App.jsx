import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      {/* Yahan Header bhi aa sakta hai */}
      
      <Outlet />   {/* 👈 YAHAN pages render honge */}

      <Footer />
    </div>
  );
}

export default App;
