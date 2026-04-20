
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/Real-State/header-img2.jpg')" }}
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white "
      >
        <h2 className="text-5xl  sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          {""}
          Explore Homes that fit your Dreams{""}
        </h2>
        <div className="space-x-6 mt-16 ">
          <button
            onClick={() => {
              document.getElementById("Projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group relative px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-indigo-500/40 overflow-hidden border-2 border-indigo-600 rounded-full active:scale-95 cursor-pointer"
          >
            <span class="absolute inset-0 w-full h-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease- origin-left"></span>
            <span class="relative  flex items-center gap-3 tracking-widest text-sm uppercase">
              Projects
            </span>
          </button>

          <button
            onClick={() => {
              document.getElementById("Contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group relative px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-indigo-500/40 overflow-hidden border-2 border-indigo-600 rounded-full active:scale-95 cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease- origin-left"></span>
            <span className="relative  flex items-center gap-3 tracking-widest text-sm uppercase">
              Contact Us
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
