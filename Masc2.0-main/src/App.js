import React  from "react";
import classes from "./App.module.css";
import User from "./Components/User/Auth/User";



function App() {
  return (
    <div className={classes.App}>
      <User />
    </div>
  );
}

export default App;
