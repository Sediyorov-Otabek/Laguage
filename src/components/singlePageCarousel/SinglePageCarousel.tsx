"use client";
import React, { FC, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface SinglePagePropTypes {
  images: string[] | undefined;
}

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const SinglePageCarousel: FC<SinglePagePropTypes> = ({ images }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Zoom>
              <img src={img} />
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SinglePageCarousel;
