import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Backdrop from "../ui/Backdrop";

import classes from "./Hero.module.css";
import HeroContent from "./HeroContent";
import HeroForm from "./HeroForm";

const Hero = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 991) {
      setOpenMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileMenu]);

  return (
    <div className={classes.hero}>
      <nav>
        <div className="container">
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <div className={classes.image_wrapper}>
                <Link href="/">
                  <a>
                    <Image
                      src="/trav-logo.png"
                      width={260}
                      height={48}
                      alt="logo"
                      priority
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.nav_links}>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Destination</Link>
                </li>
                <li>
                  <Link href="#">Tour</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>
            <div className={classes.auth_links}>
              <div className={classes.login_link}>
                <Link href="#">Login</Link>
              </div>
              <div className={classes.signup_link}>
                <Link href="#">Sign up</Link>
              </div>
            </div>
            <div className={classes.mobile_button}>
              <IconButton
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                }}
              >
                {openMobileMenu ? (
                  <CloseIcon style={{ fill: "#000", fontSize: "28" }} />
                ) : (
                  <MenuIcon style={{ fill: "#000", fontSize: "28" }} />
                )}
              </IconButton>
            </div>
            <aside
              className={`${classes.mobile_nav} ${
                openMobileMenu ? classes.open : ""
              }`}
            >
              <ul className={classes.mobile_nav_links}>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Destination</Link>
                </li>
                <li>
                  <Link href="#">Tour</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
              <ul className={classes.mobile_auth_links}>
                <li>
                  <Link href="#">Log in</Link>
                </li>
                <li>
                  <Link href="#">Sign up</Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </nav>

      <HeroContent />

      <HeroForm />

      {openMobileMenu && (
        <Backdrop
          onClose={() => {
            setOpenMobileMenu(false);
          }}
        />
      )}
    </div>
  );
};

export default Hero;
