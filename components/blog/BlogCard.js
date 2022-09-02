import React from "react";

import Image from "next/image";
import Link from "next/link";

import classes from "./BlogCard.module.css";

const BlogCard = ({ blog }) => {
  return (
    <div className={classes.blog_card}>
      <div className={classes.image_wrapper}>
        <Link href="#">
          <a>
            <Image
              src={blog.image.url}
              width={blog.image.width}
              height={blog.image.height}
              alt=""
              priority
            />
          </a>
        </Link>
      </div>
      <div className={classes.title}>
        <Link href="#">
          <a>
            <h3>{blog.title}</h3>
          </a>
        </Link>
      </div>
      <p className={classes.date}>{blog.date}</p>
    </div>
  );
};

export default BlogCard;
