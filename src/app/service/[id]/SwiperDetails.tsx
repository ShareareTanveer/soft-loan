"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperDetails = ({ images }: any) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images?.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <Image src={image.image} alt={image.alt} width={500} height={50} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperDetails;
