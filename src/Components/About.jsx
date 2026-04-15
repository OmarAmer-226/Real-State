import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="About"
    >
      <h1 className="text-2xl text-white sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {" "}
          Our Brand{" "}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
          loading="lazy"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-200"> 10+ </p>
              <p> Years of Excellence </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-200"> 12+ </p>
              <p> Projects Completed </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-200"> 20+ </p>
              <p> Mn. sq. Ft. Delivered </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-200"> 25+ </p>
              <p> Ongoing Projects </p>
            </div>
          </div>
          <p className="my-10 max-w-lg text-gray-200 ">
            We are a leading real estate company dedicated to providing the best
            residential and investment solutions that meet our clients’
            aspirations. With extensive experience and a specialized team, we
            help you find the perfect property, whether you are looking for your
            dream home or a valuable investment opportunity. We ensure the
            highest standards of quality and transparency in all our dealings,
            offering comprehensive services from consultation to closing. With
            us, you can enjoy a smooth and secure real estate experience built
            on trust and professionalism.
          </p>
          <button class="group relative px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-indigo-500/40 overflow-hidden border-2 border-indigo-600 rounded-full active:scale-95 cursor-pointer">
            <span class="absolute inset-0 w-full h-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease- origin-left"></span>

            <span class="relative z-10 flex items-center gap-3 tracking-widest text-sm uppercase">
              Learn More
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
