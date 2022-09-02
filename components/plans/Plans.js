import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PlanCard from "./PlanCard";

const plansData = [
  {
    image: {
      url: "/plans/rome.jpg",
      width: 1000,
      height: 1000,
    },
    title: "Rome,Italy",
    price: "5.42K",
    duration: "10 Days Trip",
    rate: 4.8,
  },
  {
    image: {
      url: "/plans/london.jpg",
      width: 1000,
      height: 1000,
    },
    title: "London,UK",
    price: "2.42K",
    duration: "07 Days Trip",
    rate: 4.7,
  },
  {
    image: {
      url: "/plans/cairo.jpg",
      width: 1000,
      height: 1000,
    },
    title: "Cairo,Egypt",
    price: "8.4K",
    duration: "5 Days Trip",
    rate: 4.9,
  },
  {
    image: {
      url: "/plans/osaka.jpg",
      width: 1000,
      height: 1000,
    },
    title: "Osaka,Japan",
    price: "5.42K",
    duration: "10 Days Trip",
    rate: 4.8,
  },
  {
    image: {
      url: "/plans/istanbul.jpg",
      width: 1000,
      height: 1000,
    },
    title: "Istanbul,Turkey",
    price: "2.22K",
    duration: "7 Days Trip",
    rate: 4.5,
  },
];

const Plans = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section_title">
          Best <span>vacation plan</span>
        </h2>
        <p className="section_paragraph">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!{" "}
        </p>
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            className="my_swiper"
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {plansData.map((plan) => (
              <SwiperSlide key={plan.title}>
                <PlanCard plan={plan} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Plans;
