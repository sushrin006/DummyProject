import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");

      console.log("Status:", res.status);
      console.log("OK?:", res.ok);

      if (!res.ok) {
        const raw = await res.text();
        console.error("Server returned error:", raw);
        return;
      }
      const data = await res.json();

      console.log("Data received:", data);
      setProducts(data.products);
    }
    fetchProducts();

  }, []);


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/products-by-id/${p.id}`)}
            className="border p-4 rounded shadow cursor-pointer hover:shadow-lg"
          >
            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <p className="text-sm text-blue-500 mt-2">{p.refNo}</p>
          </div>
        ))}

      </div>
    </div>
  );
}