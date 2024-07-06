import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

function UpdateProduct() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate(); // Hook from React Router DOM for programmatic navigation
  const { id } = useParams(); // Hook from React Router DOM to access URL parameters

  // useRef hooks to store references to form input elements
  const img = useRef("");
  const name = useRef("");
  const oldprice = useRef("");
  const price = useRef("");
  const title = useRef("");
  const description = useRef("");
  const category = useRef("");

  // useEffect hook to fetch product data based on ID when component mounts or ID changes
  useEffect(() => {
    axios.get(`http://localhost:8000/addproduct/${id}`).then((response) => {
      setData(response.data); // Sets fetched product data to state
      // Sets input field values based on fetched data using refs
      img.current.value = response.data.img;
      name.current.value = response.data.name;
      oldprice.current.value = response.data.oldprice;
      price.current.value = response.data.price;
      title.current.value = response.data.title;
      description.current.value = response.data.description;
      category.current.value = response.data.category;
    });
  }, [id]); // Dependency array ensures useEffect runs when ID changes

  // UpdateProduct function to handle form submission
  const UpdateProduct = (event) => {
    event.preventDefault(); // Prevents default form submission

    // Object to hold updated product data from input fields
    let update = {
      img: img.current.value,
      name: name.current.value,
      oldprice: oldprice.current.value,
      price: price.current.value,
      title: title.current.value,
      description: description.current.value,
      category: category.current.value,
    };

    // Sends PUT request to update product data on the server
    axios.put(`http://localhost:8000/addproduct/${id}`, update).then(() => {
      // Shows success message using SweetAlert2 upon successful update
      Swal.fire({
        title: "Product is Updated",
        text: "Congratulations Product Edited Successfully",
        icon: "success",
      });
      Navigate("/Admin/manage"); // Redirects to the manage page after update
    });
  };

  return (
    <>
      <AdminHeader /> {/* Renders the admin header component */}
      <section>
        <div className="container">
          <div className="flex">
            <div className="w-1/5 m-0 p-0">
              <AdminSidebar /> {/* Renders the admin sidebar component */}
            </div>
            <div className="w-4/5 m-0 p-0">
              <form action="">
                <div className="grid grid-cols-2 gap-4 mx-3">
                  <div>
                    <label
                      htmlFor="img"
                      className="block font-semibold text-xl"
                    >
                      Image
                    </label>
                    <input
                      type="text"
                      ref={img}
                      id="img"
                      placeholder="Enter Product Image"
                      className="w-full border-black border rounded-2xl h-[50px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-semibold text-xl"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      ref={name}
                      id="name"
                      placeholder="Enter Product Name"
                      className="w-full border-black border rounded-2xl h-[50px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block font-semibold text-xl"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      ref={title}
                      id="category"
                      placeholder="Enter Category"
                      className="w-full border-black border rounded-2xl h-[50px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block font-semibold text-xl"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      ref={category}
                      id="category"
                      placeholder="Enter Category"
                      className="w-full border-black border rounded-2xl h-[50px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block font-semibold text-xl"
                    >
                      Old Price
                    </label>
                    <input
                      type="text"
                      ref={oldprice}
                      id="price"
                      placeholder="Enter Product Price"
                      className="w-full border-black border rounded-2xl h-[50px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block font-semibold text-xl"
                    >
                      New Price
                    </label>
                    <input
                      type="text"
                      ref={price}
                      id="price"
                      placeholder="Enter Product Price"
                      className="w-full border-black border rounded-2xl h-[50px]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="info"
                      className="block font-semibold text-xl"
                    >
                      Description
                    </label>
                    <textarea
                      ref={description}
                      id="info"
                      placeholder="Enter Product Description"
                      className="w-full border-black border rounded-2xl h-[80px]"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <button
                      className="w-full bg-green-500 text-white h-[50px] rounded-2xl mt-2"
                      onClick={UpdateProduct} // Calls UpdateProduct function on button click
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateProduct;
