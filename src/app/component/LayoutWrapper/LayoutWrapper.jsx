"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/dashboard");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
