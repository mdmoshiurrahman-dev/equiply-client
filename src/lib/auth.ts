import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins";

const globalForMongo = globalThis as unknown as {
  _mongo?: MongoClient;
  _mongoPromise?: Promise<MongoClient>;
};

const client =
  globalForMongo._mongo ??
  new MongoClient(process.env.MONGO_DB_CONNECT as string, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  });

globalForMongo._mongo = client;
globalForMongo._mongoPromise ??= client.connect();
await globalForMongo._mongoPromise;

const db = client.db("Equiply");

export const auth = betterAuth({
  plugins: [jwt()],
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60,
    },
  },
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
  database: mongodbAdapter(db, { client }),
});