import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
