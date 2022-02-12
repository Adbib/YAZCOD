import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  //   await Promise.all(
  // getJokes().map((joke) => {
  return await db.categories.create({
    data: { title: "bla", slug: "hh", content: "hhh" },
  });
  // })
  //   );
}

seed();
