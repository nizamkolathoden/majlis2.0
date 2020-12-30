import classes from "../../../App.module.css";
import React from "react";
import Bg from "../Background/Bg";
import Auth from "../Auth/Auth";

const User = () => {
  return (
    <div className={classes.Log}>
      <Bg />
      <Auth />
    </div>
  );
};

export default User;
