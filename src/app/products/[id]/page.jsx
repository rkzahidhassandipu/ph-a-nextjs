import Image from "next/image";

// Dynamic product details page
export default async function ProductDetails({ params }) {
  const { id } = params;

  // Fetch product by ID
  const res = await fetch(`https://my-flame-kappa.vercel.app/api/auth/products/${id}`, {
    cache: "no-store", // always fresh
  });

  if (!res.ok) {
    return <div className="text-red-500">Failed to load product details</div>;
  }

  const product = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="w-full">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={400}
              className="rounded-xl shadow-md object-cover w-full h-[350px]"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-5">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-green-600 mb-3">
              ${product.price}
            </p>

            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-700">
                Category:{" "}
                <span className="font-medium text-gray-900">
                  {product.category}
                </span>
              </p>
              <p className="text-sm text-gray-700">
                Stock:{" "}
                <span
                  className={`font-medium ${
                    product.stock > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} available`
                    : "Out of Stock"}
                </span>
              </p>
              <p className="text-sm text-gray-700">
                Rating: ⭐ {product.rating}
              </p>
              <p className="text-xs text-gray-500">
                Added on: {product.createDate}
              </p>
            </div>

            {/* Action button */}
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
