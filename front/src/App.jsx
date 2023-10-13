import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nopage from "./Pages/Nopage";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Electronics from "./Catagoriess/Electronics";
import Jewelery from "./Catagoriess/Jewelery";
import MensClothing from "./Catagoriess/MensClothing";
import WomensClothing from "./Catagoriess/WomensClothing";
import Cart from "./Pages/Cart.1";

function App() {
  // useEffect(() => {
  //   // Add an event listener for the page refresh
  //   window.load = () => {
  //     // Send a DELETE request to clear cart items in the database
  //     axios
  //       .delete("http://localhost:3001/cartitemss")
  //       .then(() => {
  //         console.log("Cart items deleted from the database");
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting cart items: ", error);
  //       });
  //   };
  // }, []);

  // const [products, setProducts] = useState([]);

  // // Create the useEffect function
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => setProducts(response.data));
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Jewelery" element={<Jewelery />} />
          <Route path="/MensClothing" element={<MensClothing />} />
          <Route path="/WomensClothing" element={<WomensClothing />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
