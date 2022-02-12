import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import addProdcut from "~/utils/AddProduct";
// import db_do from "~/utils/db.server";
// import { db } from "~/utils/db.server";
import useTheme from "~/utils/useTheme";
import { PrismaClient } from "@prisma/client";
import getCategories from "~/utils/getCategories";

export let loader: LoaderFunction = async () => {
  const bla = await getCategories(); //addProdcut("prod", "prod des", "qsdqsd");
  console.log(bla);
  return {
    global: {
      title: "YAZCOD",
      theme: "Jidah",
    },
  };
};

export let meta: MetaFunction = ({ data }) => {
  return {
    title: data.global.title,
  };
};

export default function Index() {
  const data = useLoaderData();
  // console.log(data);
  let theme = data.global.theme;
  let Theme = () => useTheme({ themeName: "Jidah", data: data });

  return data && <Theme />;
}
