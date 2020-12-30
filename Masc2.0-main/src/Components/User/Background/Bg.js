import React, {useEffect} from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import classes from "../../../App.module.css"; //importing css

const Bg = () => {
  useEffect(sal, []);
  return (
    /* page-1 content */
    <div className={classes.Bg_container}>
      <div className={classes.Bg} >
        <h1 className={classes.main_head}
        data-sal-duration="1200"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease-out"
        >MASC Feedback</h1>
        <p className={classes.Bg_text}
        data-sal-duration="1200"
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease-out"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          temporibus at iure adipisci
        </p>
      </div>
    </div>
  );
};

export default Bg;
