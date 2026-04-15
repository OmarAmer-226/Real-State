import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      {
        /* cleanup function */
      }
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-1">
      <div className="container mx-auto flex justify-between item-center py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white  ">
          <a
            href="#Header"
            className="cursor-pointer hover:text-indigo-600 hover:scale-120 rounded-full px-3 py-2 uppercase"
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer hover:text-indigo-600 hover:scale-120 rounded-full px-3 py-2 uppercase"
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer hover:text-indigo-600 hover:scale-120 rounded-full px-3 py-2 uppercase"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-indigo-600 hover:scale-120 rounded-full px-3 py-2 uppercase"
          >
            Testimonials
          </a>
        </ul>
        <button class="hidden md:block group relative px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-indigo-500/40 overflow-hidden border-2 border-indigo-600 rounded-full active:scale-95 cursor-pointer">
          <span class="absolute inset-0 w-full h-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease- origin-left"></span>
          <span class="relative z-1 flex items-center gap-3 tracking-widest text-sm uppercase">
            Sign up
          </span>
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>

      {/*------------- mobile-menu--------------*/}

      <div
        className={`md:hidden ${showMobileMenu ? "w-full fixed " : "h-0 w-0"}  right-0 top-0 bottom-0 overflow-hidden  bg-gray-900 text-white transition-all z-20 `}
      >
        <div className="flex justify-end p-6 cursor-pointer ">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium divide-y divide-indigo-600">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded inline-block "
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded inline-block "
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
