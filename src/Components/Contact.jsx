import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 la:px-32 w-full overflow-hidden text-white"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together{" "}
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border-2 border-indigo-600 rounded py-3 px-4 mt-2"
              name="Name"
              type="text"
              placeholder="Enter Your name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border-2 border-indigo-600 rounded py-3 px-4 mt-2"
              name="Email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border-2 border-indigo-600 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        {/* <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer">
          {result ? result : "Send Message"}
        </button> */}
        <button class="group relative px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-indigo-500/40 overflow-hidden border-2 border-indigo-600 rounded active:scale-95 cursor-pointer">
          <span class="absolute inset-0 w-full h-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease- origin-left"></span>
          <span class="relative z-10 flex items-center gap-3 tracking-widest text-sm uppercase">
            {result ? result : "Send Message"}
          </span>
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
