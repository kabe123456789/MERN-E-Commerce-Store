import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
      <Footer/>
    </>
 
  );
};

export default App;
