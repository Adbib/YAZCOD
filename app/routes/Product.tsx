import React from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import useTheme from "~/utils/useTheme";

type Props = {};
export let loader: LoaderFunction = () => {
  return {
    global: {
      title: "YAZCOD1",
      theme: "Jidah",
    },
  };
};
export let meta: MetaFunction = ({ data }) => {
  return {
    title: data.global.title,
  };
};
export default function Product({}: Props) {
  const data = useLoaderData();

  let Theme = () => useTheme({ data });

  return <Theme />;
}
