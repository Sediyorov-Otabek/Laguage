import Header from "@/components/feature/header/Header";
import React, { FC } from "react";
import "@/scss/main.scss";
import Footer from "@/components/feature/footer/Footer";

const layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
