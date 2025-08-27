"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <p className="text-sm text-gray-500 mb-3">⭐ {product.rating}</p>

      <div className="mt-auto flex gap-2">
        <Link
          href={`/products/${product._id}`}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg text-center text-sm font-medium"
        >
          Details
        </Link>

        <button
          onClick={() => alert(`Buying ${product.title}`)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
