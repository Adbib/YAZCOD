// import React from "react";
import React from "react";
import { memo, ReactNode, useMemo } from "react";
import { MetaFunction, Outlet, useLocation } from "remix";
import * as Theme from "../../themes/jidah/index";
import JidahChilds from "./Jidah/index";

type Props = {
  data?: any;
};

// export const meta: MetaFunction = () => {
//   return {
//     title: "bla",
//   };
// };

let Jidah = memo(({ data }: any) => {
  // console.log(props);
  const loca = useLocation().pathname;
  return (
    <>
      <JidahChilds data={data}>
        {loca == "/" ? (
          <>
            <Theme.SectionOne data={data} />
            <Theme.SectionTwo data={data} />
            {/* <Theme.ProductsSection />
            <Theme.CategorySection />
            <Theme.Products2Section />
            <Theme.ShopByCategory />
            <Theme.Footer /> */}
          </>
        ) : loca.includes("product/") ? (
          <Theme.SingleProduct />
        ) : loca.includes("category/") ? (
          <Theme.SingleCategory />
        ) : (
          ""
        )}
      </JidahChilds>
    </>
  );
});

export default Jidah;
