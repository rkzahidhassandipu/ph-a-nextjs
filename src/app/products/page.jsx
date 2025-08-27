import ProductTable from "../component/ProductTable/ProductTable";


export default async function ProductsPage() {
  const res = await fetch(`https://my-flame-kappa.vercel.app/api/auth/products`, {
    cache: "no-store", // always fresh data
  });


  if (!res.ok) {
    return <div className="text-red-500">Failed to load products</div>;
  }

  const products = await res.json();

  return (
    <div className="mx-auto w-11/12 my-12">
      <h1 className="text-2xl font-bold mb-6">Products List</h1>
      <ProductTable products={products} />
    </div>
  );
}
