import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
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
export default function Category({}: Props) {
  const data = useLoaderData();

  let Theme = () => useTheme({ data });

  return <Theme />;
}
