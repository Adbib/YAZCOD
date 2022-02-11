import React from "react";
import { ReactNode } from "react";
import * as Theme from "../../../themes/jidah/index";

type Props = {
  children?: any;
};

export default function JidahChilds(props: any) {
  // console.log(props.children);
  return (
    <>
      {React.Children.map<ReactNode, ReactNode>(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child);
        }
      })}
    </>
  );
}
