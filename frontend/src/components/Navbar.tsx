import React from "react";
import { Link } from "react-router-dom"; // ✅ Link lets us navigate between pages

const Navbar:React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
      </div>
    </nav>
  )
}
export default Navbar;