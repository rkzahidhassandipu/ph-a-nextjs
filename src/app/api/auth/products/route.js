import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const productsCollection = dbConnect(collectionNameObj.productsCollection);
    const products = await productsCollection.find().toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
};


export const POST = async (req) => {
  const body = await req.json();

  const productsCollection = await dbConnect(collectionNameObj.productsCollection);
  const result = await productsCollection.insertOne(body);

  return NextResponse.json(result);
};