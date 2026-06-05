import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const res = await fetch(
        `http://localhost:5000/products/${id}`
      );

      const data: Product = await res.json();
      setProduct(data);
    })();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        {product.name}
      </h1>

      <p className="text-gray-600 mt-4">
        {product.description}
      </p>

      <p className="text-blue-500 mt-2">
        Ref: {product.refNo}
      </p>
    </div>
  );
}