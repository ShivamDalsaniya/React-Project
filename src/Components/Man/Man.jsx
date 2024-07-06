import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

function Man() {
  const [data, setData] = useState([]); // State to store product data fetched from API
  const [currentPage, setCurrentPage] = useState(1); // State to manage pagination
  const productsPerPage = 8; // Number of products per page
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  // const [wishlist, setWishlist] = useState([]); // State to store wishlist items
  
  useEffect(() => {
    // Fetch products from API when component mounts
    axios
      .get("http://localhost:8000/addproduct?category=Man")
      .then((response) => {
        setData(response.data); // Set product data in state
      })
      .catch((error) => console.error("Error fetching products:", error));

    // // Fetch wishlist items from API when component mounts
    // axios
    //   .get("http://localhost:8000/wishlist")
    //   .then((response) => {
    //     setWishlist(response.data); // Set wishlist items in state
    //   })
    //   .catch((error) => console.error("Error fetching wishlist:", error));
  
  }, []);

  // Function to calculate discount percentage
  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  // Pagination calculations

  // Calculate the index of the last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;

  // Calculate the index of the first product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice the data array to get only the products for the current page
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Set current page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when currentPage changes
  }, [currentPage]);

  // Calculate total number of pages based on total products and products per page
  const totalPages = Math.ceil(data.length / productsPerPage);

  // Function to handle adding/removing items to/from wishlist
  // const handleAddToWishlist = (item) => {
  //   const isInWishlist = wishlist.some(
  //     (wishlistItem) => wishlistItem.id === item.id
  //   );
  //   if (!isInWishlist) {
  //     // Add item to wishlist
  //     axios
  //       .post("http://localhost:8000/wishlist", item)
  //       .then(() => {
  //         setWishlist([...wishlist, item]); // Update wishlist state
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "There was an error adding the item to the wishlist!",
  //           error
  //         );
  //       });
  //   } else {
  //     // Remove item from wishlist
  //     axios
  //       .delete(`http://localhost:8000/wishlist/${item.id}`)
  //       .then(() => {
  //         setWishlist(
  //           wishlist.filter((wishlistItem) => wishlistItem.id !== item.id)
  //         ); // Update wishlist state
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "There was an error removing the item from the wishlist!",
  //           error
  //         );
  //       });
  //   }
  // };

  // Function to check if item is in wishlist
  // const isItemInWishlist = (item) => {
  //   return wishlist.some((wishlistItem) => wishlistItem.id === item.id);
  // };

  // JSX rendering
 
  return (
    <>
      <section>
        <div className="max-w-[1240px] mx-auto">
          <div>
            <h1 className="text-4xl mb-3">Men's Shopping</h1>
            <div className="grid justify-center sm:grid-cols-4 grid-cols-1 gap-x-3 gap-y-6">
              {currentProducts.map((item) => (
                <div className="card p-2 border sm:mx-0 mx-2" key={item.id}>
                  <div className="h-[350px] flex justify-center">
                    <img
                      src={item.img}
                      className="max-w-full max-h-full object-contain"
                      alt={item.name}
                    />
                  </div>
                  <div className="font-semibold lg:text-2xl text-sm text-center">
                    {item.name}
                  </div>
                  <div
                    className="text-center"
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="text-center text-green- font-semibold">
                    Discount:{" "}
                    {String(
                      calculateDiscount(item.oldprice, item.price)
                    ).padStart(2, "0")}{" "}
                    % off
                  </div>
                  <div className="font-semibold text-xl text-center">
                    <del>{item.oldprice} Rs.</del> {item.price} Rs.
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => {
                        navigate(`/details/${item.id}`); // Navigate to product details page
                      }}
                      className="bg-black text-white text-xl p-2 mt-2"
                    >
                      Show More
                    </button>
                  </div>
                  {/* <div className="flex justify-center mt-2">
                    <span
                      className="cursor-pointer text-2xl"
                      onClick={() => handleAddToWishlist(item)} // Add/remove item to/from wishlist
                    >
                      {isItemInWishlist(item) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-black" />
                      )}
                    </span>
                  </div> */}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center mt-4">
              <button
                onClick={() => paginate(currentPage - 1)} // Previous page button
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 mr-2"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)} // Page number buttons
                  className={`px-4 py-2 mx-1 my-1 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)} // Next page button
                disabled={indexOfLastProduct >= data.length}
                className="px-4 py-2 bg-gray-300 ml-2"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Man;
