"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Button from "../ui/button";
import Arrow from "../icons/arrow";

interface CarouselItem {
  icon: string;
  headline: string;
  summary: string;
}

interface Props {
  data: CarouselItem[];
}

export default function Carousel({data}:Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <ul className="flex justify-end items-center space-x-4 mt-8">
        <li>
          <Button
            ref={prevRef}
            variant="icon-btn"
            icon={<Arrow color="white" />}
            buttonStyle="border-white text-white border w-10 h-10 rotate-180"
          />
        </li>
        <li>
          <Button
            ref={nextRef}
            variant="icon-btn"
            icon={<Arrow color="white" />}
            buttonStyle="border-white text-white border w-10 h-10"
          />
        </li>
      </ul>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation;
          if (nav && typeof nav !== "boolean") {
            nav.prevEl = prevRef.current!;
            nav.nextEl = nextRef.current!;
          }
        }}
        onInit={(swiper) => {
          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="py-10 h-full">
              <div
                className="rounded-xl bg-[#FFFFFF14] px-6 py-9 w-full
                  transition-transform duration-300 ease-out
                  hover:scale-105 hover:rotate-5 h-full"
              >
                <h4 className="text-7xl">{item?.icon}</h4>
                <h1 className="pt-7 pb-5 font-bold text-2xl">
                  {item?.headline}
                </h1>
                <p className="max-w-[320px] opacity-60">{item?.summary}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
