import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Detail() {
  // State variables
  const [data, setData] = useState({}); // State to store product data
  const { id } = useParams(); // Extracting parameter `id` from URL using useParams()

  // useEffect hook to fetch data when component mounts or `id` changes
  useEffect(() => {
    axios
      .get(`http://localhost:8000/addproduct/${id}`) // Fetch product details based on `id`
      .then((response) => {
        setData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("There Was An Error Fetching Data!", error); // Log error if data fetching fails
      });

    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [id]); // Dependency array ensures useEffect runs when `id` changes

  // Function to add item to cart
  const addToCart = (item) => {
    axios
      .post("http://localhost:8000/cart", item) // Send POST request to add item to cart
      .then((response) => {
        // Display success message using SweetAlert2 library
        Swal.fire({
          title: "Success",
          text: "Thanks For Purchase! Your product was added successfully.",
          icon: "success",
        });
        console.log("Item added to cart:", response.data); // Log response data
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart!", error); // Log error if adding to cart fails
      });
  };

  // Function to calculate discount percentage
  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100); // Calculate discount percentage
  };

  // JSX structure for rendering product details
  return (
    <>
      <section>
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-center font-bold text-5xl">
            Product Details Here
          </h1>
          <div className="sm:flex justify-between gap-x-5 mt-4 w-full">
            {/* Product Image */}
            <div className="border sm:w-1/4 flex justify-center order-1 h-[250px] w-full">
              <img src={data.img} alt="" className="h-[100%] max-w-full" />{" "}
              {/* Display product image */}
            </div>
            {/* Product Details */}
            <div className="order-2 sm:w-3/4 w-full">
              <p className="text-3xl font-medium sm:text-start text-center">
                {data.name} {/* Display product name */}
              </p>
              <p className="text-2xl font-medium sm:text-start text-center">
                {data.title} {/* Display product title */}
              </p>
              <p className="text-sm text-gray-500 text-justify py-2 mx-2">
                {data.description} {/* Display product description */}
              </p>
              <p className=" font-semibold sm:text-start text-center">
                Discount:{" "}
                {String(calculateDiscount(data.oldprice, data.price)).padStart(
                  2,
                  "0"
                )}
                % {/* Display calculated discount percentage */}
              </p>
              <p className="text-2xl font-semibold sm:text-start text-center">
                <del>{data.oldprice} rs.</del> {""} {data.price} rs.{" "}
                {/* Display old and discounted price */}
              </p>
              {/* Add to Cart Button */}
              <div className="sm:text-start text-center">
                <button
                  className="bg-yellow-400 text-white text-2xl p-2 mt-2 font-medium rounded-full"
                  onClick={() => addToCart(data)} // Call addToCart function on button click
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
