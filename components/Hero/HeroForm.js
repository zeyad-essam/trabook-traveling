import React from "react";

import classes from "./HeroForm.module.css";

const HeroForm = () => {
  return (
    <div className={classes.hero_form}>
      <div className="container">
        <form>
          <div className={classes.form_inputs}>
            <div className={classes.form_action}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Where are you going"
              />
            </div>
            <div className={classes.form_action}>
              <label htmlFor="date">Date</label>
              <input
                placeholder="When you will go"
                type="text"
                onFocus={(e) => {
                  e.target.type = "date";
                  console.log(e.target);
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                id="date"
              />
            </div>
            <div className={classes.form_action}>
              <label htmlFor="guest">Guest</label>
              <input
                type="number"
                min={1}
                max={6}
                id="guest"
                placeholder="Number of guests"
              />
            </div>
          </div>
          <button>Explore Now</button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
