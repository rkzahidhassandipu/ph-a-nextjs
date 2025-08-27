import { redirect } from "next/navigation";

export default function DashboardHome() {
  // perform redirect immediately
  redirect("/dashboard/add-product");

  // return a fallback component (just in case)
  return null;
}
