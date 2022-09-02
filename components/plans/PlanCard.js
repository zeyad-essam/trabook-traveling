import React from "react";
import Image from "next/image";
import Link from "next/link";

import NearMeIcon from "@mui/icons-material/NearMe";
import StarIcon from "@mui/icons-material/Star";

import classes from "./PlanCard.module.css";

const PlanCard = ({ plan }) => {
  return (
    <div className={classes.plan_card}>
      <div className={classes.image_wrapper}>
        <Link href="#">
          <a>
            <Image
              src={plan.image.url}
              width={plan.image.width}
              height={plan.image.height}
              alt={plan.title}
              objectFit="contain"
              priority
            />
          </a>
        </Link>
        {/* <div className={classes.link_wrapper}>
          <Link href="#">Book Now</Link>
        </div> */}
      </div>
      <div className={classes.content_wrapper}>
        <div className={classes.upper_content}>
          <Link href="#">
            <a>
              <h3>{plan.title}</h3>
            </a>
          </Link>
          <span className={classes.price}>{`$${plan.price}`}</span>
        </div>
        <div className={classes.bottom_content}>
          <div className={classes.duration}>
            <NearMeIcon
              style={{
                color: "#FA7436",
              }}
            />
            <span>{plan.duration}</span>
          </div>
          <div className={classes.rate}>
            <span>
              <StarIcon
                style={{
                  color: "#FFC107",
                  fontSize: 20,
                  marginTop: 2,
                }}
              />
            </span>
            <span>{plan.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
