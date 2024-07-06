import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { FaTachometerAlt, FaBox } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { SiPowerpages } from "react-icons/si";
import { MdManageHistory,MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <>
      <section className="bg-black text-white h-[100vh] fixed top-[50px] w-[300px] px-3 ">
        <div className="text-2xl pt-5">Welcome Admin</div>
        <div className="sidemenu mt-2 pt-3">
          <ul className="text-xl">
            <li className="mt-2">
              <Link to="/Admin/dashboard" className="flex items-center gap-x-3">
                <FaTachometerAlt />
                Dashboard
              </Link>
            </li>
            <li className="mt-2 relative">
              <div
                onClick={toggleProductDropdown}
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <AiFillProduct />
                Product
              </div>
              {isProductDropdownOpen && (
                <ul className="pl-8 mt-2">
                  <li className="mt-2">
                    <Link to="/Admin/add" className="flex items-center gap-x-3"><MdAddShoppingCart />Add Product</Link>
                  </li>
                  <li className="mt-2 ">
                    <Link to="/Admin/manage" className="flex items-center gap-x-3"><MdManageHistory />Manage Product</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mt-2">
              <Link to="" className="flex items-center gap-x-3">
                <SiPowerpages />
                Pages
              </Link>
            </li>
            <li className="mt-2">
              <Link to="" className="flex items-center gap-x-3">
                <FaBox />
                Orders
              </Link>
            </li>
            <li className="mt-2">
              <Link to="" className="flex items-center gap-x-3">
                <FaGear />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AdminSidebar;
