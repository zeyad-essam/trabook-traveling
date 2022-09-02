import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import DealCard from "./DealCard";

const dealsData = [
  {
    image: {
      url: "/deals/madrid.jpg",
      width: 1000,
      height: 1000,
    },
    city: "Madrid",
    rate: 4.8,
    country: "Spain",
    price: {
      beforeDiscount: 950,
      afterDiscount: 850,
    },
  },
  {
    image: {
      url: "/deals/firenze.jpg",
      width: 1000,
      height: 1000,
    },
    city: "Firenze",
    rate: 4.5,
    country: "Italy",
    price: {
      beforeDiscount: 850,
      afterDiscount: 750,
    },
  },
  {
    image: {
      url: "/deals/paris.jpg",
      width: 1000,
      height: 1000,
    },
    city: "Paris",
    rate: 4.8,
    country: "France",
    price: {
      beforeDiscount: 699,
      afterDiscount: 599,
    },
  },
  {
    image: {
      url: "/deals/london.jpg",
      width: 1000,
      height: 1000,
    },
    city: "London",
    rate: 4.8,
    country: "UK",
    price: {
      beforeDiscount: 950,
      afterDiscount: 850,
    },
  },
  {
    image: {
      url: "/deals/newyork.jpg",
      width: 1000,
      height: 1000,
    },
    city: "NewYork",
    rate: 4.9,
    country: "USA",
    price: {
      beforeDiscount: 750,
      afterDiscount: 500,
    },
  },
  {
    image: {
      url: "/deals/tokyo.jpg",
      width: 1000,
      height: 1000,
    },
    city: "Tokyo",
    rate: 4.8,
    country: "Japan",
    price: {
      beforeDiscount: 799,
      afterDiscount: 699,
    },
  },
];

const Deals = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section_title">
          Exclusive <span>deals & discounts</span>
        </h2>
        <p className="section_paragraph">
          Discover our fantastic early booking discounts & start planning your
          journey.
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
              567: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {dealsData.map((deal) => (
              <SwiperSlide key={deal.city}>
                <DealCard deal={deal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Deals;
