import Image from "next/image";
import React from "react";
import classes from "./Informations.module.css";

const Informations = () => {
  return (
    <section className={`${classes.informations} ${"section"}`}>
      <div className="container">
        <div className={classes.informations_inner}>
          <h2 className="section_title">
            Things you need <span>to do</span>
          </h2>
          <p className="section_paragraph">
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
          <ul>
            <li>
              <div className={classes.image_wrapper}>
                <Image src="/signup.png" width={96} height={96} priority />
              </div>
              <h3>Sign Up</h3>
              <p>
                Completes all the work associated with planning and processing
              </p>
            </li>
            <li>
              <div className={classes.image_wrapper}>
                <Image src="/money.png" width={96} height={96} priority />
              </div>
              <h3>Worth of Money</h3>
              <p>
                After successful access then book from exclusive deals & pricing
              </p>
            </li>
            <li>
              <div className={classes.image_wrapper}>
                <Image src="/location.png" width={96} height={96} priority />
              </div>
              <h3>Exciting Travel</h3>
              <p>
                Start and explore a wide range of exciting travel experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Informations;
