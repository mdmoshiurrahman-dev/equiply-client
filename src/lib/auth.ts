import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

declare global {
  var _mongoClient: MongoClient | undefined;
}

const uri = process.env.MONGO_DB_CONNECT as string;

if (!global._mongoClient) {
  global._mongoClient = new MongoClient(uri);
}
const client: MongoClient = global._mongoClient;

const db = client.db("Equiply");
export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: ["admin", "renter", "provider"],
        input: false,
        defaultValue: "none",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
