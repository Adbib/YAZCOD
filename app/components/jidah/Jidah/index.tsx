import React from "react";
import { ReactNode } from "react";
import * as Theme from "../../../themes/jidah/index";

type Props = {
  children?: any;
  data?: any;
};

export default function JidahChilds({ children, data }: Props) {
  console.log(data);
  return (
    <>
      <Theme.Header />

      {React.Children.map<ReactNode, ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            name: "props", //TODO : Props not passed to elements
          });
        }
      })}
    </>
  );
}
