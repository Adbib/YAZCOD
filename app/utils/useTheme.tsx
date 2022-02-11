import { cloneElement, createElement, useEffect, useState } from "react";
import Jidah from "~/components/jidah/Jidah";
import JidahChilds from "~/components/jidah/Jidah/index";
import PreLoader from "~/components/PreLoader";
import Idham from "../components/Idham";

type Props = {
  themeName?: string | undefined | null;
  data: any;
};
export default function useTheme({ themeName, data }: Props): JSX.Element {
  const [Theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    let cacheTheme = JSON.stringify(localStorage.getItem("theme")).replace(
      /"/g,
      ""
    );
    if (themeName == undefined) {
      themeName = cacheTheme;
    }

    if (!cacheTheme.includes(themeName) && !cacheTheme.length < 3) {
      localStorage.setItem("theme", themeName);
      cacheTheme = JSON.stringify(localStorage.getItem("theme")).replace(
        /"/g,
        ""
      );
    }
    setTheme(cacheTheme);
  }, [themeName]);

  return Theme == "Jidah"
    ? createElement(Jidah, {
        data: data,
        // children: JidahChilds,
      })
    : Theme == "Idham"
    ? createElement(Idham, {
        data: data,
      })
    : createElement(PreLoader, {
        error: data,
      });
}
