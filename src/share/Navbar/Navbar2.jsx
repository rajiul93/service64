"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRightAlt, CgSearch } from "react-icons/cg";
const Navbar2 = ({ openDrawer }) => { 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[900] duration-300  ${
        scrolled ? "shadow-xl shadow-[#4a484845] py-2" : "py-3"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <button className="text-3xl font-bold max-w-32 sm:w-36 h-12 rounded-lg   text-slate-600 border-slate-700">
          <Image
            src="https://service64.com/static/media/Service64_logo-dark.36b731cc.svg"
             alt="Service64 Logo"
             width={500} // specify the width
             height={500} // specify the height
          />
        </button>
        <div className="hidden lg:flex xl:gap-4 items-center navigation text-slate-900 xl:text-lg">
          <Link className="py-2 px-2 hover:text-pClr" href={"/"}>
            Home
          </Link>
          <Link className="py-2 px-2 hover:text-pClr" href={"/service"}>
            Service
          </Link>
          <Link className="py-2 px-2 hover:text-pClr" href={"/guides"}>
            Guides
          </Link>
          <Link className="py-2 px-2 hover:text-pClr" href={"/provider"}>
            Become a service provider
          </Link>
        </div>

        <div className="flex items-center gap-2 relative">
          <div className="relative max-w-48 xl:w-auto xl:max-w-full ">
            <input
              type="text"
              placeholder="Search here..."
              className="px-2 border py-3 border-slate-200 focus:outline-none outline-none rounded-full pl-3 w-full text-slate-600"
            />
            <span className="absolute z-30 top-1/2 -translate-y-1/2 right-3 text-xl text-slate-600">
              <CgSearch />
            </span>
          </div>
          <div className="hidden  lg:flex gap-2">
            <Link
              href={"/login"}
              className="py-4 px-4 xl:px-8 duration-200 bg-[#F0EEFF] hover:bg-purple-100 text-slate-900 rounded-full font-semibold"
            >
              Log in
            </Link>
            <Link
              href={"/sign-up"}
              className="py-4 px-4 xl:px-8 shadow-xl  duration-200 bg-[#5F4BDB] hover:bg-blue-600 rounded-full text-white font-semibold"
            >
              Sign Up
            </Link>
          </div>

          {/* Menu Btn */}
          <button
            onClick={openDrawer}
            className="text-4xl lg:hidden duration-300 text-slate-800"
          >
            <CgMenuRightAlt />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
