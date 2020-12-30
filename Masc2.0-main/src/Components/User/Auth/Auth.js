import React from "react";
import AuthHeader1 from "./Authcomponents/AuthHeader_1";
import AuthForm from "./Authcomponents/AuthForm";
import Footer from "../Footer";
import classes from "../../../App.module.css";


const Auth = () => {

  return (
    <div className={classes.Auth}>
      <AuthHeader1 />
      <AuthForm />
      <Footer />
    </div>
  );
};

export default Auth;
