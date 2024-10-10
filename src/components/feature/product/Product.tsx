"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DataType {
  data: { record: ProductType[] };
}

interface ProductType {
  id: string;
  images: ImagesType[];
  title: string;
  category: { primary: string };
  price: string;
  originalPrice: string;
}

interface ImagesType {
  color: string;
  images: string[];
}

const Product: FC<DataType> = ({ data }) => {
  return (
    <div className="products__container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.record?.map((item, idx) => (
        <div key={idx} className="product bg-[#F4F5F7] max-w-80">
          <Image
            src={item?.images[0]?.images[0]}
            alt="img"
            width={400}
            height={400}
          />
          <div className="product--info p-4 grid gap-1">
            <Link
              href={`products/${item.id}`}
              className="font-semibold text-2xl"
            >
              {item.title}
            </Link>
            <p className="text-[#666] text-base">{item.category.primary}</p>
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
  );
};

export default Product;
