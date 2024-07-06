import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../../../public/Images/Logo.png";

function Navbar() {
  // State variables
  const [isScrolled, setIsScrolled] = useState(false); // To track whether page is scrolled
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu state

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // Set isScrolled state based on scroll position
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown if open when toggling mobile menu
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-30 navbar ${
          isScrolled ? "blurred" : ""
        }`}
      >
        <nav className="max-w-[1240px] flex gap-x-3 justify-between items-center mx-auto py-2 px-2">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-x-9 items-center">
            <div className="my-auto nav-menu">
              <ul className="inline-flex gap-x-8 text-xl">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/ProductShop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/Man">Man</NavLink>
                </li>
                <li>
                  <NavLink to="/Women">Women</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="border rounded-full h-auto p-3 bg-[#f6f6f6] border-none my-auto flex items-center nav-menu">
              <CiSearch className="mx-3" />
              <input
                type="text"
                placeholder="Search"
                className="outline-0 bg-transparent"
              />
            </div>
            <div className="my-auto flex items-center gap-3 icons-menu">
              <Link to="/wish">
                <CiHeart className="text-5xl bg-[#f6f6f6] p-2 rounded-2xl cursor-pointer" />
              </Link>
              <Link to="/Login">
                <IoPersonOutline className="text-5xl bg-[#f6f6f6] p-2 rounded-2xl cursor-pointer" />
              </Link>
              <Link to="/cart">
                <CiShoppingCart className="text-5xl bg-[#f6f6f6] p-2 rounded-2xl cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden flex items-center">
            <button className="text-4xl" onClick={handleMobileMenuToggle}>
              {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed top-[57px] left-0 w-full h-full bg-white py-4 z-40 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 bg-white">
            <li>
              <NavLink to="/" onClick={handleMobileMenuToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ProductShop" onClick={handleMobileMenuToggle}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/Man" onClick={handleMobileMenuToggle}>
                Man
              </NavLink>
            </li>
            <li>
              <NavLink to="/Women" onClick={handleMobileMenuToggle}>
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleMobileMenuToggle}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col items-center mt-4 bg-white">
            <div className="border rounded-full h-auto p-3 bg-[#f6f6f6] border-none flex items-center mb-4">
              <CiSearch className="mx-3" />
              <input
                type="text"
                placeholder="Search"
                className="outline-0 bg-transparent"
              />
            </div>
            <div className="flex items-center gap-3">
              <Link to="/wish">
                <CiHeart className="text-5xl bg-[#f6f6f6] p-2 rounded-2xl " />
              </Link>
              <NavLink to="/Login">
                <IoPersonOutline className="text-5xl bg-[#f6f6f6] p-2 rounded-2xl " />
              </NavLink>
              <NavLink to="/cart">
                <CiShoppingCart className="text-5xl bg-[#f6f6f6] p-2 rounded-2xl " />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
