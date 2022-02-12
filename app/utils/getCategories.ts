import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export default async function getCategories() {
  //   title: string,
  //   title: string,
  //   content: string,
  //   img: string,
  //   slug?: string
  //   slug = slug ? slug : title;
  await db.$connect();
  return await db.categories
    .findMany()
    .catch((e: any) => {
      throw e;
    })
    .finally(async () => {
      await db.$disconnect();
    });
}
