import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

function AddProduct() {
  // State to hold fetched data (not used effectively in current code)
  const [data, setData] = useState([]);

  // Fetching data from server on component mount
  useEffect(() => {
    axios.get(`http://localhost:8000/addproduct`).then((response) => {
      // Update data state with fetched data (not used further in current code)
      setData(response.data);
    });
  }, []); // Empty dependency array ensures useEffect runs once on mount

  // Refs to store input values
  const img = useRef(""); // Stores a reference to the input field for the product image URL. It allows direct access to the input value entered by the user.
  const name = useRef(""); // Stores a reference to the input field for the product name. Similar to img, it allows access to the entered product name.
  const oldprice = useRef(""); // Stores a reference to the input field for the old price of the product. It captures the entered old price value.
  const price = useRef(""); // Stores a reference to the input field for the new price of the product. Similar to oldprice, it captures the entered new price value.
  const title = useRef(""); // Stores a reference to the input field for the title of the product. It holds the entered product title.
  const description = useRef(""); // Stores a reference to the textarea field for the product description. It captures the entered product description.
  const category = useRef(""); // Stores a reference to the input field for the category of the product. It holds the entered product category.

  // Function to handle form submission
  const addHandeler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Collect input values from refs
    let ins = {
      img: img.current.value, // Gets the value of the product image URL input field
      name: name.current.value, // Gets the value of the product name input field
      oldprice: oldprice.current.value, // Gets the value of the old price input field
      price: price.current.value, // Gets the value of the new price input field
      title: title.current.value, // Gets the value of the product title input field
      description: description.current.value, // Gets the value of the product description textarea
      category: category.current.value, // Gets the value of the product category input field
    };
    // The collected input values (`ins`) can now be used for further processing,
    // such as sending a POST request to add a new product to the server.

    // Send POST request to add product
    axios.post(`http://localhost:8000/addproduct`, ins).then(() => {
      // Show success message using SweetAlert2
      Swal.fire({
        title: "Wow",
        text: "Congratulations Your Product Added Successfully",
        icon: "success",
      });
    });
    // Reset form after submission
    e.target.reset();
  };

  return (
    <>
      <AdminHeader />
      <section>
        <div className="container-fluid">
          <div></div>
          <div className="flex">
            <div className="w-1/5 m-0 p-0">
              <AdminSidebar />
            </div>
            <div className="w-4/5">
              <div className="p-4">
                <form onSubmit={addHandeler} className="mt-2">
                  <div className="grid grid-cols-2 gap-4">
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
                        placeholder="Enter Title"
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
                      <button className="w-full bg-green-500 text-white h-[50px] rounded-2xl mt-2">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddProduct;
