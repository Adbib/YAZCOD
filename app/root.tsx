// let theme;
import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import bootstrap from "./styles/bootstrap.css";
// import useTheme from "./utils/useTheme.server";

// export let loader: LoaderFunction = async () => {
//   const themeLoad = await useTheme("jidah");
//   // console.log(themeLoad);
//   return await "posts";
// };
export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};
export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: bootstrap,
    },
  ];
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet bla="bla" />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
