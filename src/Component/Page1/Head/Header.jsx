import React from "react";
import image from "../images/default-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="w-full h-[5rem] bg-white border flex justify-between items-center px-[10rem] cursor-pointer">
        <div>
          <img src={image} alt="Image" />
        </div>
        <div className="flex justify-center items-center">
          <Link to="page1">
            {" "}
            <h3 className="px-6 py-3 hover:text-red-600">Page 1</h3>{" "}
          </Link>
          <Link to="/">
            <h3 className="px-6 py-3 hover:text-red-600">Home</h3>
          </Link>
          <Link to="/contact">
            {" "}
            <h3 className="px-6 py-3 hover:text-red-600">Contact</h3>
          </Link>
          <Link to="/page2">
            {" "}
            <h3 className="px-6 py-3 hover:text-red-600">Page 2</h3>
          </Link>
          <Link to="/landing">
            <h3 className="px-6 py-3 hover:text-red-600">Landing</h3>
          </Link>
          <Link to="/about">
            <h3 className="px-6 py-3 hover:text-red-600">About</h3>
          </Link>
          <Link to="/team">
            <h3 className="px-6 py-3 hover:text-red-600">Team</h3>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
