"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <Link
            href="/dashboard/add-product"
            className={`block px-4 py-2 rounded ${
              pathname === "/dashboard/add-product"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            ➕ Add Product
          </Link>
          <Link
            href="/dashboard/manage-products"
            className={`block px-4 py-2 rounded ${
              pathname === "/dashboard/manage-products"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            📦 Manage Products
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>

      {/* Right-Bottom Button */}
      <Link
        href="/"
        className="fixed bottom-6 right-6 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-700"
      >
        ⬅ Back Home
      </Link>
    </div>
  );
}
