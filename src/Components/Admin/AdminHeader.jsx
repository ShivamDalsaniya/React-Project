import React from "react";
import Logo from "../../../public/Images/WhiteLogo.png";
import { FaRegBell, FaUserCircle, FaSearch } from "react-icons/fa";

function AdminHeader() {
  return (
    <>
      <header className="container sticky top-0 z-40">
        <nav className="flex justify-between items-center p-2 bg-black text-white">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="flex items-center bg-white w-[400px] text-black rounded-full p-2 gap-x-2">
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="w-full border-none outline-0"
            />
          </div>
          <div className="admin flex items-center gap-x-5">
            <FaRegBell className="text-2xl cursor-pointer" />
            <FaUserCircle className="text-2xl cursor-pointer" />
            <button className="bg-red-500 text-white p-[5px_10px] text-2xl">
              LogOut
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
