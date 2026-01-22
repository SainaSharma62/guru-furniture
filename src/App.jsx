import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>      
      <Outlet />   
      <Footer />
    </div>
  );
}

export default App;
