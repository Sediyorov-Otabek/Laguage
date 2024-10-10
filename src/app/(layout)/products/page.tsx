import React from "react";

import Hero from "@/components/feature/hero/Hero";
// import Products from "@/components/shop/products/Products";
import Advantages from "@/components/feature/advantages/Advantages";
import Filter from "@/components/shop/filter/Filter";
import Products from "@/components/feature/products/Products";

const About = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Hero title="Shop" />
      <Filter />
      <Products />
      <Advantages />
    </section>
  );
};

export default About;
