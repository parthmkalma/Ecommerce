import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import "../bg.css";
import axios from "axios";
import Card from "../Component/Card";
import Catagory from "../Component/Catagory";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Create the useEffect function
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <>
      <div className="main h-screen">
        <Navbar />
        <Catagory />
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 pt-3 pl-3 pr-3">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
