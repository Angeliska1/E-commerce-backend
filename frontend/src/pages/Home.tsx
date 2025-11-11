import React, { useEffect, useState } from "react";
import {product} from "../types/product"; // ✅ Importing product types

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
// }

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from backend API
    fetch("http://localhost:5000/api/products")
    .then((res) => res.json( ));
    .then((data) => setProducts(data));
    .catch((error) => console.error("Error fetching products:", error));

}, []);

return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-pink-600 font-semibold">₦{product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;