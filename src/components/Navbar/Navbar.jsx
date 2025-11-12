import React, { useState } from "react";
import logo from "../../assets/images/LOGO 1.png";
import { NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-lg m-0 p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
          <div className="flex items-center justify-between ">
            <NavLink to={"./"}>
              <img
                src={logo}
                alt="logo"
                width={120}
                className=" hover:scale-105"
              />
            </NavLink>
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <ul
            className={`md:flex md:flex-row mt-2 flex-col gap-4 ${
              open ? "flex" : "hidden"
            } items-center`}
          >
            <li className="nav-links">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/brands"}>Brands</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/categories"}>Categories</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/products"}>Products</NavLink>
            </li>
          </ul>
          <ul
            className={`md:flex md:flex-row flex-col items-center ${
              open ? "flex" : "hidden"
            } gap-4 `}
          >
            <li className="nav-links">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to={"/logout"}>Logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
