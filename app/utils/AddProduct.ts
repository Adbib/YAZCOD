import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export default async function addProdcut( //   title: string,
  title: string,
  content: string,
  img: string,
  inHome?: boolean,
  slug?: string
) {
  slug = slug ? slug : title;
  inHome = inHome ? inHome : true;
  await db.$connect();
  return await db.categories
    .create({
      data: {
        title,
        content,
        img,
        // inHome,
        slug,
      },
    })
    .catch((e: any) => {
      throw e;
    })
    .finally(async () => {
      await db.$disconnect();
    });
}
