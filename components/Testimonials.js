import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import classes from "./Testimonials.module.css";
import Image from "next/image";
import Link from "next/link";

const testimonialsData = [
  {
    image: "/testimonials/avatar-1.jpg",
    name: "Mike taylor",
    location: "Lahora, Pakistan",
  },
  {
    image: "/testimonials/avatar-2.jpg",
    name: "John Cena",
    location: "Cairo, Egypt",
  },
  {
    image: "/testimonials/avatar-3.jpg",
    name: "Michael Jackson",
    location: "Giza, Egypt",
  },
  {
    image: "/testimonials/avatar-4.jpg",
    name: "Amr diab",
    location: "Cairo, Egypt",
  },
];

const Testimonials = () => {
  return (
    <section className={`${classes.testimonials} section`}>
      <div className="container">
        <div className={classes.testimonials_inner}>
          <div className={classes.text}>
            <h3>
              What people say <span>about Us.</span>
            </h3>
            <p>
              Our Clients send us bunch of smilies with our services and we love
              them.
            </p>
          </div>
          <div className={classes.swiper_wrapper}>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={10}
              className="my_swiper"
            >
              {testimonialsData.map((data) => (
                <SwiperSlide key={data.name}>
                  <div className={classes.testimonial_card}>
                    <div className={classes.image_wrapper}>
                      <Image
                        src={data.image}
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pulvinar sapien et ligula ullamcorper.
                    </q>
                    <p>{data.name}</p>
                    <span>{data.location}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
