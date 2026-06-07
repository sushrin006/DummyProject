import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products-by-id/${id}`);

      console.log("Status:", res.status);
      console.log("OK?:", res.ok);

      if (!res.ok) {
        const raw = await res.text();
        console.error("Server returned error:", raw);
        return;
      }
      const data: Product = await res.json();

      console.log("Data received:", data);
      setProduct(data);
    }
    fetchProduct();

  }, [id])


  if (!product) {
    return (
      <div className="text-center mt-10 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-blue-500 mt-2">Ref: {product.refNo}</p>
    </div>
  );
}