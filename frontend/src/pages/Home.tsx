import React, { useEffect, useState } from "react";
import type { Product } from "../types/product"; // ✅ Make sure type is PascalCase

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // ✅ Define async function inside useEffect
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://e-commerce-backend-19-fjak.onrender.com/api/product");
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data: Product[] = await res.json();
        setProducts(data); // ✅ Update state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // ✅ Call the async function
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      
      {products.length === 0 ? (
        <p>Loading products... (or none found)</p>
      ) : (

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-pink-600 font-semibold">₦{product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Home;
