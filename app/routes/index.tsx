import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import useTheme from "~/utils/useTheme";

export let loader: LoaderFunction = () => {
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
  let theme = data.global.theme;
  let Theme = (data: any) => useTheme({ themeName: "Jidah", data: data });

  return data && <Theme />;
}
