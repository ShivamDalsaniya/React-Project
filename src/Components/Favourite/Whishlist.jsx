import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]); // State to store wishlist items
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  useEffect(() => {
    // Fetch wishlist items from API when component mounts
    axios.get("http://localhost:8000/wishlist")
      .then((response) => {
        setWishlist(response.data); // Set wishlist items in state
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
      });
  }, []);

  // Function to handle removing item from wishlist
  const handleRemoveFromWishlist = (item) => {
    axios.delete(`http://localhost:8000/wishlist/${item.id}`)
      .then(() => {
        setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id)); // Update wishlist state after removal
      })
      .catch((error) => {
        console.error("There was an error removing the item from the wishlist!", error);
      });
  };

  // JSX rendering
  return (
    <>
      <section>
        <div className="max-w-[1240px] mx-auto">
          <div>
            <h1 className="text-4xl mb-3">Your Wishlist</h1>
            <div className="grid justify-center sm:grid-cols-4 grid-cols-1 gap-x-3 gap-y-6">
              {wishlist.map((item) => (
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
                  <div className="font-semibold text-xl text-center">
                    <del>{item.oldprice} rs.</del> {item.price} rs.
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
                  <div className="flex justify-center mt-2">
                    <span
                      className="cursor-pointer text-2xl text-red-500"
                      onClick={() => handleRemoveFromWishlist(item)} // Remove item from wishlist
                    >
                      <FaHeart />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
