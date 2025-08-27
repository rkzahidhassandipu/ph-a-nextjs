import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = params.id;
  const productsCollection = await dbConnect(collectionNameObj.productsCollection);

  let data = await productsCollection.findOne({ _id: new ObjectId(id) });
  if (!data) {
    data = await productsCollection.findOne({ _id: id }); // fallback if string _id
  }

  if (!data) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(data);
};

