import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { FaPencil } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";

function ManageProduct() {
  const [data, setData] = useState([]); // State to store fetched product data
  const Navigate = useNavigate(); // Hook from React Router DOM for navigation

  useEffect(() => {
    // Fetches product data from the server when component mounts
    axios.get(`http://localhost:8000/addproduct`).then((response) => {
      setData(response.data); // Sets fetched product data to state
    });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <AdminHeader /> {/* Renders the admin header component */}
      <section>
        <div className="container">
          <div className="flex">
            <div className="w-1/5 m-0 p-0">
              <AdminSidebar /> {/* Renders the admin sidebar component */}
            </div>
            <div className="w-4/5 mx-2">
              <table className="text-center w-full">
                <thead>
                  <tr className="border border-black">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Old Price</th>
                    <th>New Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="mt-2 w-[50px] border border-black">
                            <img src={item.img} alt={item.name} className="" />
                          </td>
                          <td className=" w-auto align-top border border-black">
                            {item.name}
                          </td>
                          <td className=" w-auto text-justify align-top border border-black px-2">
                            {item.title}
                          </td>
                          <td className=" w-auto text-justify align-top border border-black px-2">
                            {item.description}
                          </td>
                          <td className=" w-auto align-top border border-black">
                            {item.category}
                          </td>
                          <td className=" w-auto align-top border border-black">
                            {item.oldprice}
                          </td>
                          <td className=" w-auto align-top border border-black">
                            {item.price}
                          </td>
                          <td className=" w-auto align-top border border-black">
                            <button
                              onClick={
                                () => Navigate(`/Admin/update/${item.id}`) // Redirects to the update page for the specific product
                              }
                            >
                              <FaPencil className=" text-green-500" />{" "}
                              {/* Edit icon */}
                            </button>
                          </td>
                          <td className=" align-top border border-black">
                            <button
                              onClick={
                                () => Navigate(`/Admin/delete/${item.id}`) // Redirects to the delete page for the specific product
                              }
                            >
                              <IoTrash className=" text-red-500" />{" "}
                              {/* Delete icon */}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ManageProduct;
