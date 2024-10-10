import React from "react";

import heroImg from "@/assets/home-1/home-decoration.png";
const Hero = () => {
  return (
    <section
      className="min-h-[45rem] text-center md:text-left max-w-screen-2xl mx-auto bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="banner md:max-w-[40rem] grid gap-5 bg-[#FFF3E3] p-[4rem_3rem] absolute inset-[0_0_auto_0] md:inset-[auto_5%_8%_auto]">
        <p className="font-medium">New Arrival</p>
        <h3 className="text-3xl md:text-[3.5rem] text-[#B78E2E] font-semibold m:w-[12ch] leading-[1]">
          Discover Our New Collection
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mx-auto md:mx-0 w-fit py-4 px-7 bg-[#B78E2E] text-white text-sm font-bold">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
