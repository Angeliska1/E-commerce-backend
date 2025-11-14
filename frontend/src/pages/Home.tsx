import React, { useEffect, useState } from "react";
import type { Product } from "../types/product"; // Import your Product type

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://e-commerce-backend-3-2i08.onrender.com/api/product");
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const json = await res.json();

        setProducts(json.paginatedData.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {products.length === 0 ? (
        <p>Loading products... (or none found)</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded p-4 shadow hover:shadow-lg"
            >
              <img
                src={product.images?.[0]?.secure_url || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-pink-600 font-semibold">₦{product.price}</p>
              {product.description && (
                <p className="text-gray-500">{product.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
