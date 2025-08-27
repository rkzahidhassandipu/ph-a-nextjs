"use client";

import { useForm } from "react-hook-form";

export default function AddProductPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Add default values
    const newProduct = {
      ...data,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
      rating: parseFloat(data.rating) || 0,
      createDate: new Date().toISOString().split("T")[0], // today's date
    };

    console.log("Product Data:", newProduct);

    // Example API call (later connect with MongoDB)
    await fetch("https://my-flame-kappa.vercel.app/api/auth/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    reset();
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            {...register("title", { required: "Product title is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input
            type="number"
            {...register("stock", { required: "Stock quantity is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.stock && (
            <p className="text-red-500 text-sm">{errors.stock.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium">Rating</label>
          <input
            type="number"
            step="0.1"
            {...register("rating")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full border rounded px-3 py-2"
            rows="4"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
