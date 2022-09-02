import React from "react";
import Link from "next/link";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import classes from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={classes.subscribe}>
        <div className="container">
          <div className={classes.subscribe_inner}>
            <h3>Subscribe and get exclusive deals & offer</h3>
            <form>
              <div className={classes.form_action}>
                <label>
                  <MailOutlineIcon />
                </label>
                <input type="text" id="email" placeholder="Enter your mail" />
              </div>
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className="container">
          <div className={classes.footer_main}>
            <div className={classes.footer_left}>
              <div className={classes.logo_wrapper}>
                <Image
                  src="/trav-logo.png"
                  width={260}
                  height={48}
                  alt="logo"
                  priority
                />
              </div>
              <p>Book your trip in minute, get full Control for much longer.</p>
              <ul className={classes.socials_list}>
                <li>
                  <Link href="#">
                    <a>
                      <FacebookIcon style={{ fontSize: 32 }} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <InstagramIcon style={{ fontSize: 32 }} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <TwitterIcon style={{ fontSize: 32 }} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.footer_right}>
              <div className={classes.footer_links}>
                <div>
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Careers</Link>
                    </li>
                    <li>
                      <Link href="#">Logistic</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Contact</h3>
                  <ul>
                    <li>
                      <Link href="#">Help/FAQ</Link>
                    </li>
                    <li>
                      <Link href="#">Press</Link>
                    </li>
                    <li>
                      <Link href="#">Affilates</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>More</h3>
                  <ul>
                    <li>
                      <Link href="#">Press Centre</Link>
                    </li>
                    <li>
                      <Link href="#">Our Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Low fare tips</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.copyright}>
            <p>Copyright, Trabook 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
