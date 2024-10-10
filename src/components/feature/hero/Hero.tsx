import React, { FC } from "react";

import img1 from "@/assets/shop-1/shop1.png";

const Hero: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="mb-4 min-h-56 bg-cover bg-no-repeat flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${img1.src})` }}
      >
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <nav className="text-gray-500 text-sm mt-2">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <span className="mx-2">›</span>
          <a href="#" className="hover:text-gray-700">
            {title}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
