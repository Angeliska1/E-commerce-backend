import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App: React.FC = () => {

  return (
    <>
     <Navbar />
    <Routes>
        {/* ✅ This defines all the pages */}
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App;