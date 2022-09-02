import React from "react";

import classes from "./Blog.module.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import BlogCard from "./BlogCard";

const blogData = [
  {
    image: {
      url: "/blog/blog-1.jpg",
      width: 1000,
      height: 1000,
    },
    title: "The Amazing Difference a Year of Travelling .",
    date: "July 27, 2021",
  },
  {
    image: {
      url: "/blog/blog-2.jpg",
      width: 1000,
      height: 1000,
    },
    title: "Travel far enough, you meet yourself.",
    date: "June 01, 2000",
  },
  {
    image: {
      url: "/blog/blog-3.jpg",
      width: 1000,
      height: 1000,
    },
    title: "How to Save Money While Visiting Africa .",
    date: "May 07 , 2021",
  },
  {
    image: {
      url: "/blog/blog-4.jpg",
      width: 1000,
      height: 1000,
    },
    title: "Reflections on 5 Months of Travel: Time to Hang",
    date: "January 14, 2021",
  },
];

const Blog = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section_title">
          Get update with <span>latest blog</span>
        </h2>
        <div className={classes.swiper_wrapper}>
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
            {blogData.map((blog) => (
              <SwiperSlide key={blog.title}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
