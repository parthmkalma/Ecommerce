import { Link } from "react-router-dom";
export default function Catagory() {
  // Create the useEffect function

  return (
    <>
      <div className="flex  w-full mt-0 bg-slate-100 border-black ">
        <h2 className=" m-auto hover:bg-[#fffeea] rounded-2xl px-2 ">
          <div className="p-2">
            <Link to={"/Electronics"}>Electronics</Link>
          </div>
        </h2>
        <h2 className=" m-auto hover:bg-[#fffeea] rounded-2xl px-2 ">
          <div className="p-2">
            <Link to={"/Jewelery"}>Jewelery</Link>
          </div>
        </h2>
        <h2 className=" m-auto hover:bg-[#fffeea] rounded-2xl px-2 ">
          <div className="p-2">
            <Link to={"/MensClothing"}>Men's Clothing</Link>
          </div>
        </h2>
        <h2 className=" m-auto hover:bg-[#fffeea] rounded-2xl px-2 ">
          <div className="p-2">
            <Link to={"/WomensClothing"}>Women's Clothing</Link>
          </div>
        </h2>
      </div>
    </>
  );
}
