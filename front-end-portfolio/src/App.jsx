import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/layout/CustomCursor";
import SmoothScroll from "./components/layout/SmoothScroll";
import HashScrollHandler from "./components/layout/HashScrollHandler";

function App() {
  return (
    <SmoothScroll>
      <HashScrollHandler />
      <div className="noise-overlay min-h-screen bg-bg text-white">
        <CustomCursor />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </div>
    </SmoothScroll>
  );
}

export default App;
