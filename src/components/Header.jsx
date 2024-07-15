import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <div className="flex items-center">
          <img className="h-14 w-14" src={logo} alt="Logo" />
          <Link to="/">
            <h1 className="font-extrabold text-purple-700 ml-2 text-2xl">
              EliteResume
            </h1>
          </Link>
        </div>
        <ul className="flex gap-16">
          <Link to="/">
            <li className="text-purple-700 font-bold font-serif">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-purple-700 font-bold font-serif">About</li>
          </Link>
          <Link to="/dashboard">
            <li className="text-purple-700 font-bold font-serif">Dashboard</li>
          </Link>
          <Link to="/register">
            <li className="text-purple-700 font-bold font-serif">Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Header;
