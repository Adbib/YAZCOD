// import React from "react";
import React from "react";
import { memo, ReactNode, useMemo } from "react";
import { MetaFunction, Outlet, useLocation } from "remix";
import * as Theme from "../../themes/jidah/index";
import JidahChilds from "./Jidah/index";

type Props = {
  data?: any;
};

export const meta: MetaFunction = () => {
  return {
    title: "bla",
  };
};

let Jidah = memo((props) => {
  console.log(props);
  const loca = useLocation().pathname;
  return (
    <>
      <Theme.Header />
      <JidahChilds>
        {loca == "/" ? (
          <>
            <Theme.SectionOne />
            <Theme.SectionTwo />
            <Theme.ProductsSection />
            <Theme.CategorySection />
          </>
        ) : loca.includes("product") ? (
          <Theme.SingleProduct />
        ) : (
          ""
        )}
      </JidahChilds>
    </>
  );
});

export default Jidah;
