import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between">
      <h1 className="text-lg">IPDR Portal</h1>
      <div>
        <Link to="/" className="mr-4">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

