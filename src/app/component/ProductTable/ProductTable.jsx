"use client";

import Link from "next/link";

export default function ProductTable({ products }) {
  const handleBuy = (title) => {
    alert(`Buying ${title}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 font-medium">
                {product.title}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                {product.description}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600 font-bold">
                ${product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ⭐ {product.rating}
              </td>
              <td className="border border-gray-300 px-4 py-3">
  <div className="flex gap-3">
    <Link
      href={`/products/${product._id}`}
      className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 
                 hover:bg-gray-200 transition-all duration-200 shadow-sm"
    >
      🔍 Details
    </Link>

    <button
      onClick={() => handleBuy(product.title)}
      className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white 
                 hover:bg-blue-700 transition-all duration-200 shadow-md hover:scale-105"
    >
      🛒 Buy
    </button>
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
