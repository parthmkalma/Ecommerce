import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Component/Card";
import "../bg.css";
import Navbar from "../Component/Navbar";
import Catagory from "../Component/Catagory";
export default function MensClothing() {
  const [products, setProducts] = useState([]);

  // Create the useEffect function
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  // Filter the products by category "electronics"
  const electronicsProducts = products.filter(
    (product) => product.category === "men's clothing"
  );

  return (
    <div className="main">
      <Navbar />
      <Catagory />
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 pt-3 pl-3 pr-3">
        {electronicsProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
