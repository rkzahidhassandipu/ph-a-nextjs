import ProductCard from "./ProductCard/ProductCard";


export default async function Products() {
  const res = await fetch("https://my-flame-kappa.vercel.app/api/auth/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="text-red-500">Failed to load products</div>;
  }

  const products = await res.json();

  return (
    <div className="mx-auto w-4/5 my-16">
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* ✅ See More Button */}
      <div className="flex justify-center mt-8">
        <a
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
        >
          See More
        </a>
      </div>
    </div>
  );
}
