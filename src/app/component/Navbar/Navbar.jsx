"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log("|session", session);

  return (
    <nav className="bg-blue-200  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MySite
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600"
            >
              Products
            </Link>
            
            {status === "authenticated" && (
              <Link
                href="/dashboard/add-product"
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
            )}

            <>
              {status === "authenticated" ? (
                <button
                  onClick={() => signOut()}
                  className="block px-4 py-2 border border-blue-600 text-blue-600 hover:text-white rounded-lg hover:bg-blue-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 border border-green-600 text-green-600 hover:text-white rounded-lg hover:bg-green-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </>
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
