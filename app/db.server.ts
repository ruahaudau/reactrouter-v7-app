import { PrismaClient } from "@prisma/client";

// Augment the existing NodeJS.Global interface to include our 'db' property.
// It's marked as optional (db?) because it might not be initialized immediately.
declare global {
  namespace NodeJS {
    interface Global {
      db?: PrismaClient;
    }
  }
}

// 'global' refers to the global object in Node.js.
// To access the augmented 'db' property, we cast 'global' to 'NodeJS.Global'.
// This informs TypeScript that 'db' is an expected property on this object.

const db = (global as NodeJS.Global).db || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  (global as NodeJS.Global).db = db;
}

export default db;