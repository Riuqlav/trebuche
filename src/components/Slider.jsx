import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styledComponents from "styled-components";
import classes from "./Slider.module.css";

// Used styled components because the module wouldn't work with props, nor inline
const Arrow = styledComponents.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Slider = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Arrow}>
        <ArrowLeftOutlined direction="left" />
      </div>
      <div className={classes.Arrow}>
        <ArrowRightOutlined direction="right" />
      </div>
    </div>
  );
};

export default Slider;
