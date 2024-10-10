import Hero from "@/components/home/hero/Hero";
import Range from "@/components/home/range/Range";
import Products from "@/components/feature/products/Products";
import React from "react";
import Inspirations from "@/components/home/inspirations/Inspirations";
import Furniture from "@/components/home/furniture/Furniture";

const Home = () => {
  return (
    <div>
      <Hero />
      <Range />
      <Products />
      <Inspirations />
      <Furniture />
    </div>
  );
};

export default Home;
