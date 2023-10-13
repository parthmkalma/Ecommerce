import React from "react";
import "../bg.css";
import Navbar from "../Component/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Catagory from "../Component/Catagory";
import Card from "../Component/Card";
export default function Products() {
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
