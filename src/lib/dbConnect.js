import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DB_URI;

export const collectionNameObj = {
    usersCollection: "user",
    productsCollection: "products",
}

const dbConnect = (collectionName) => {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: Error
        }
    })
    return  client.db(process.env.DB_NAME).collection(collectionName)
}

export default dbConnect;