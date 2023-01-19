import React, { ReactNode } from "react";
import Banner from "./banner/LayoutBanner";
import Header from "./header/LayoutHeader";

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      <Banner />
      <div>{children}</div>
    </div>
  );
}
