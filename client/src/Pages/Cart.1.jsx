import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import Card from "../Component/Card";

export default function Cart() {
  const deleteItem = () => {
    axios;
    //       .delete("http://localhost:3001/cartitemss")
    //       .then(() => {
    //         console.log("Cart items deleted from the database");
    //       })
    //       .catch((error) => {
    //         console.error("Error deleting cart items: ", error);
    //       });
  };
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Make an API request to fetch cart items from your backend
    axios.get("http://localhost:3001/cartitems").then((response) => {
      setCartItems(response.data);
    });
  }, []);
  return (
    <div className="main h-screen">
      <Navbar />
      <div className="flex justify-end">
        <button
          onClick={deleteItem}
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete All
        </button>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 pt-3 pl-3 pr-3">
        {cartItems.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
