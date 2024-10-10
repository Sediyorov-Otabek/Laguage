import React from "react";

import { error } from "console";
import Product from "../product/Product";

// const data = [
//   {
//     id: 1,
//     title: "Syltherine",
//     category: "Stylish cafe chair",
//     price: "2.500.000",
//     originalPrice: "3.500.000",
//     img: p1,
//   },
//   {
//     id: 2,
//     title: "Leviosa",
//     category: "Stylish cafe chair",
//     price: "2.500.000",
//     originalPrice: "",
//     img: p2,
//   },
//   {
//     id: 3,
//     title: "Lolito",
//     category: "Luxury big sofa",
//     price: "7.000.000",
//     originalPrice: "14.000.000",
//     img: p3,
//   },
//   {
//     id: 4,
//     title: "Respira",
//     category: "Outdoor bar table and stool",
//     price: "500.000",
//     originalPrice: "",
//     img: p4,
//   },
//   {
//     id: 5,
//     title: "Grifo",
//     category: "Night lamp",
//     price: "1.500.000",
//     originalPrice: "",
//     img: p5,
//   },
//   {
//     id: 6,
//     title: "Muggo",
//     category: "Small mug",
//     price: "150.000",
//     originalPrice: "",
//     img: p6,
//   },
//   {
//     id: 7,
//     title: "Pingky",
//     category: "Cute bed set",
//     price: "7.000.000",
//     originalPrice: "14.000.000",
//     img: p7,
//   },
//   {
//     id: 8,
//     title: "Potty",
//     category: "Minimalist flower pot",
//     price: "500.000",
//     originalPrice: "",
//     img: p8,
//   },
// ];

const Products = async () => {
  async function fetchApi() {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/67024f68acd3cb34a8920fb3",
      {
        headers: {
          "X-Master-Key":
            "$2a$10$.vg2bZmuax/qqiu9DJyk.uwTjcLnUITl8AW/avzdSi8vzDTQb61da",
          "X-JSON-Path": "$..products[:8]",
        },
      }
    );

    if (!response.ok) {
      throw error("Something went swront");
    }

    return await response.json();
  }

  const data = await fetchApi();

  return (
    <section className="wrapper my-10 grid gap-5">
      <div className="products__info text-center">
        <h2 className="font-semibold text-2xl">Our Products</h2>
      </div>
      <Product data={data} />
      <button className="border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300 text-sm text-[#B88E2F] py-3 px-11 font-semibold mx-auto w-fit ">
        Show More
      </button>
    </section>
  );
};

export default Products;
