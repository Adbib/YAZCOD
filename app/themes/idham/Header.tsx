import React from "react";

type Props = {
  title?: string;
  logo?: string;
  menu?: Array<any>;
};

export default function Header({ title, logo, menu }: Props) {
  return <div>header</div>;
}
