import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from server on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/cart")
      .then((response) => {
        // Process received data to include quantity and parse price
        const updatedCartItems = response.data.map((item) => ({
          ...item,
          quantity: 1, // Initialize quantity to 1
          price: parseFloat(item.price.replace(/[^\d\.]/g, "")), // Parse price as a float, removing non-numeric characters
        }));
        setCartItems(updatedCartItems);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart items!", error);
      });
  }, []);

  // Function to remove an item from the cart
  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8000/cart/${id}`)
      .then(() => {
        // Update cart items state by filtering out the removed item
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("There was an error removing the item!", error);
      });
  };

  // Function to handle quantity change for an item in the cart
  const handleQuantityChange = (id, newQuantity) => {
    // Update quantity of the selected item
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Function to calculate total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Placeholder function for handling order submission
  const handleOrderNow = () => {
    // Implement your order submission logic here
    console.log("Order Now clicked");
  };

  return (
    <>
      <section>
        <div className="max-w-[1240px] mx-auto">
          <div className="mt-4">
            {/* Display message if cart is empty */}
            {cartItems.length === 0 ? (
              <p className="text-center text-5xl font-medium">
                Your cart is empty
              </p>
            ) : (
              // Render each item in the cart
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-x-2 mt-4 border p-4 items-center"
                >
                  <img src={item.img} alt="" className="h-[100px] mx-auto" />
                  <div className="w-3/4">
                    <p className="text-3xl font-medium">{item.name}</p>
                    <p className="text-xl">{item.title}</p>
                    <p className="text-2xl font-normal">{item.price} rs.</p>
                  </div>
                  {/* Display total price for each item */}
                  <p className="text-2xl font-normal">
                    {item.price * item.quantity}
                  </p>
                  {/* Dropdown to select quantity */}
                  <div className="flex items-center">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="bg-gray-100 border border-gray-300 rounded p-2"
                    >
                      {/* Generate options for quantity selection */}
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Button to remove item from cart */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white p-2 rounded h-[50px] ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
            {/* Display total price and order button if cart is not empty */}
            {cartItems.length > 0 && (
              <div className="mt-8 flex justify-end items-center">
                <p className="text-2xl font-medium mr-4">
                  Total: {calculateTotal()} rs.
                </p>
                <button
                  onClick={handleOrderNow}
                  className="bg-blue-500 text-white p-3 rounded disabled:opacity-50"
                  disabled={cartItems.length === 0}
                >
                  Order Now
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
