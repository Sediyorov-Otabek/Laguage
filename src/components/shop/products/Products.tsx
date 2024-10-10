import React from "react";

import p1 from "@/assets/home-1/products/p-1.png";
import p2 from "@/assets/home-1/products/p-2.png";
import p3 from "@/assets/home-1/products/p-3.png";
import p4 from "@/assets/home-1/products/p-4.png";
import p5 from "@/assets/home-1/products/p-5.png";
import p6 from "@/assets/home-1/products/p-6.png";
import p7 from "@/assets/home-1/products/p-7.png";
import p8 from "@/assets/home-1/products/p-8.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: "2.500.000",
    originalPrice: "3.500.000",
    img: p1,
  },
  {
    id: 2,
    title: "Leviosa",
    category: "Stylish cafe chair",
    price: "2.500.000",
    originalPrice: "",
    img: p2,
  },
  {
    id: 3,
    title: "Lolito",
    category: "Luxury big sofa",
    price: "7.000.000",
    originalPrice: "14.000.000",
    img: p3,
  },
  {
    id: 4,
    title: "Respira",
    category: "Outdoor bar table and stool",
    price: "500.000",
    originalPrice: "",
    img: p4,
  },
  {
    id: 5,
    title: "Grifo",
    category: "Night lamp",
    price: "1.500.000",
    originalPrice: "",
    img: p5,
  },
  {
    id: 6,
    title: "Muggo",
    category: "Small mug",
    price: "150.000",
    originalPrice: "",
    img: p6,
  },
  {
    id: 7,
    title: "Pingky",
    category: "Cute bed set",
    price: "7.000.000",
    originalPrice: "14.000.000",
    img: p7,
  },
  {
    id: 8,
    title: "Potty",
    category: "Minimalist flower pot",
    price: "500.000",
    originalPrice: "",
    img: p8,
  },
];

const Products = () => {
  return (
    <div className="wrapper mt-4">
      <div className="products__container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, idx) => (
          <div key={idx} className="product bg-[#F4F5F7] max-w-80">
            <Image
              src={item.img}
              alt="product image"
              className="max-h-80 object-contain"
            />
            <div className="product--info p-4 grid gap-1">
              <h4 className="font-semibold text-2xl">{item.title}</h4>
              <p className="text-[#666] text-base">{item.category}</p>
              <p className="text-xl font-normal flex gap-3">
                Rp {item.price}
                <span className="text-base text-[#666] line-through">
                  {item.originalPrice && `Rp ${item.originalPrice}`}
                </span>
              </p>
            </div>
          </div>
        ))}
        {data.map((item, idx) => (
          <div key={idx} className="product bg-[#F4F5F7] max-w-80">
            <Image
              src={item.img}
              alt="product image"
              className="max-h-80 object-contain"
            />
            <div className="product--info p-4 grid gap-1">
              <h4 className="font-semibold text-2xl">{item.title}</h4>
              <p className="text-[#666] text-base">{item.category}</p>
              <p className="text-xl font-normal flex gap-3">
                Rp {item.price}
                <span className="text-base text-[#666] line-through">
                  {item.originalPrice && `Rp ${item.originalPrice}`}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-8">
        {/* Active Page */}
        <button className="bg-yellow-600 text-white rounded px-4 py-2 focus:outline-none">
          1
        </button>

        {/* Inactive Pages */}
        <button className="bg-white text-gray-800 rounded px-4 py-2 border border-gray-300 hover:bg-gray-100 focus:outline-none">
          2
        </button>

        <button className="bg-white text-gray-800 rounded px-4 py-2 border border-gray-300 hover:bg-gray-100 focus:outline-none">
          3
        </button>

        {/* Next Button */}
        <button className="bg-white text-gray-800 rounded px-4 py-2 border border-gray-300 hover:bg-gray-100 focus:outline-none">
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
