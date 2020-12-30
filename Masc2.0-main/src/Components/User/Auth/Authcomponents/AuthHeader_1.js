import React from "react";
import logo from "../../../../Asset/Logo-removebg-preview.png";
import classes from "../../../../App.module.css";

const AuthHeader_1 = () => {
  return (
    <div className={classes.AuthHeader_1}>
      <img className={classes.logo_header} src={logo} alt="Not found" />
      <h2 className={classes.join_text}>Join with your Admission number</h2>
    </div>
  );
};

export default AuthHeader_1;
