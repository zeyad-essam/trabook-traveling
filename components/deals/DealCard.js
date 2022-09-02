import React from "react";

import Image from "next/image";
import Link from "next/link";

import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import classes from "./DealCard.module.css";

const DealCard = ({ deal }) => {
  return (
    <div className={classes.deal_card}>
      <div className={classes.image_wrapper}>
        <Link href="#">
          <a>
            <Image
              src={deal.image.url}
              width={deal.image.width}
              height={deal.image.height}
              alt={`${deal.city} city`}
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
              <h3>{deal.city}</h3>
            </a>
          </Link>
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
            <span>{deal.rate}</span>
          </div>
        </div>
        <div className={classes.bottom_content}>
          <div className={classes.location}>
            <LocationOnIcon
              style={{
                color: "#666666",
                fontSize: 20,
              }}
            />
            <span>
              <Link href="#">{deal.country}</Link>
            </span>
          </div>
          <div className={classes.price}>
            <span
              className={classes.before_discount}
            >{`$${deal.price.beforeDiscount}`}</span>
            <span
              className={classes.after_discount}
            >{`$${deal.price.afterDiscount}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
