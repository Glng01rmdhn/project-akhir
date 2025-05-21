import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide"> Proyek Sekolah</h1>
      <div className="space-x-4 text-sm md:text-base">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/Achievement" className="hover:text-blue-600 transition">Achievement</Link>
        <Link to="/Proyek" className="hover:text-blue-600 transition">Proyek</Link>
      </div>
    </nav>
  );
}

export default Navbar;
