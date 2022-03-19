import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import classes from "./Slider.module.css";

const Slider = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Arrow}>
        <ArrowLeftOutlined />
      </div>
      <div className={classes.Arrow}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
