import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const firstRef = useRef("");

  // Function to handle search
  const handleSearch = () => {
    // Perform your search logic here based on the value in searchQuery
    // For example, you can navigate to a search results page with the query.
    // In this example, we're logging the search query to the console.
    console.log("Search Query:", searchQuery);
  };

  return (
    <nav className="bg-transparent text-gray-700 pb-2 pt-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold pl-14">
          <Link to="/">E-commerce App</Link>
        </div>
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-[600px]"
            type="search"
            name="search"
            placeholder="Search"
            ref={firstRef}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-0 top-0 mt-1 mr-4"
          >
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              {/* Your SVG path for the search icon */}
            </svg>
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              // xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              // style={enable-background:new 0 0 56.966 56.966}
              // xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="pr-14">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="'text-gray-300 hover:bg-yellow-800 hover:text-white p-1 rounded-md hover:font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Products"
                className="'text-gray-300 hover:bg-yellow-800 hover:text-white p-1 rounded-md hover:font-medium"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/Cart"
                className=" hover:bg-yellow-800 hover:text-white p-1 rounded-md hover:font-medium"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className=" hover:bg-yellow-800 hover:text-white p-1 rounded-md hover:font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className=" hover:bg-yellow-800 hover:text-white p-1 rounded-md hover:font-medium"
                aria-label="Account"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
