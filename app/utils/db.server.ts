import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export default async function db_do(fun: Function) {
  // Connect the client

  await db.$connect();
  fun();
  // ... you will write your Prisma Client queries here
}

// export { db };
