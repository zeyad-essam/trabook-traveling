import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <div className={classes.hero_content}>
      <div className="container">
        <div className={classes.content_inner}>
          <div className={classes.text}>
            <h1>
              Get started your exciting <span>journey</span> with us.
            </h1>
            <p>
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.{" "}
            </p>
            <Link href="#">Discover Now</Link>
          </div>
          <div className={classes.image}>
            <Image
              src="/hero-explore.png"
              width={2097}
              height={1755}
              alt="main image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
