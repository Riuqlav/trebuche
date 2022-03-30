import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Wrapper}>
        <div className={classes.Left}>
          <span className={classes.Language}>EN</span>
          <div className={classes.SearchContainer}>
            <input className={classes.Input} />
            <Search style={{ color: "grey", fontSize: 18 }} />
          </div>
        </div>
        <div className={classes.Center}>
          <h1 className={classes.Logo}>Trébuché.</h1>
        </div>
        <div className={classes.Right}>
          <div className={classes.MenuItem}>REGISTER</div>
          <div className={classes.MenuItem}>SIGN IN</div>
          <div className={classes.MenuItem}>
            {" "}
            <Badge color="primary" badgeContent={10}>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
