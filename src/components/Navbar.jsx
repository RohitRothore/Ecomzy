import React from "react";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div className=" ">
      <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="flex items-center">
            <FaShoppingBasket className=" h-16 w-16 text-green-600" />
            <p className=" text-green-600 text-3xl mt-2 p-1 ">ECOMZY</p>
          </div> 
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/"> 
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 &&
                <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
