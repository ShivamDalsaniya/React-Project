import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { GrBarChart } from "react-icons/gr";
import { BiSolidNotepad } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";
import Level from "../../../public/Images/Level.png";

function Dashboard() {
  return (
    <>
      <AdminHeader />
      <section className="bg-[#171821] text-white">
        <div className="flex">
          <div className="w-1/5 m-0 p-0">
            <AdminSidebar />
          </div>
          <div className="w-4/5 m-0 p-0 mx-2 font-bold">
            <div className="text-center text-5xl border p-1 border-black">
              Dashboard
            </div>
            <div className="main flex gap-x-1 text-white">
              <div className="bg-[#21222D] w-4/5 pe-2">
                <h1 className="ms-2 text-4xl">Sales Summary</h1>
                <div className="flex ms-2">
                  <div className="one grid grid-cols-4 w-full gap-x-2 my-3">
                    <div className="card bg-[#42434c] p-2 text-white">
                      <div>
                        <GrBarChart className="text-[#FEB95A] text-3xl" />
                      </div>
                      <h2 className="text-xl">$50k</h2>
                      <p className="text-sm">Total Sales</p>
                      <p className="text-[#FEB95A]">+20% from last week</p>
                    </div>
                    <div className="card bg-[#42434c] p-2 text-white">
                      <div>
                        <BiSolidNotepad className="text-[#A9DFD8] text-3xl" />
                      </div>
                      <h2 className="text-xl">500</h2>
                      <p className="text-sm">Total Orders</p>
                      <p className="text-[#A9DFD8]">+10% from last week</p>
                    </div>
                    <div className="card bg-[#42434c] p-2 text-white">
                      <div>
                        <TbShoppingBagCheck className="text-[#F2C8ED] text-3xl" />
                      </div>
                      <h2 className="text-xl">50</h2>
                      <p className="text-sm">Products Sold</p>
                      <p className="text-[#F2C8ED]">+5% from last week</p>
                    </div>
                    <div className="card bg-[#42434c] p-2 text-white">
                      <div>
                        <BsPersonFillAdd className="text-[#20AEF3] text-3xl" />
                      </div>
                      <h2 className="text-xl">$50k</h2>
                      <p className="text-sm">New Customers</p>
                      <p className="text-[#20AEF3]">+150 Customers Monthly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second w-1/5 bg-[#42434c]">
                <img src={Level} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
