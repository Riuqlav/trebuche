import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
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
          <Link to="/" className={classes.Logo}>
            <h1>Trébuché.</h1>{" "}
          </Link>
        </div>
        <div className={classes.Right}>
          <Link to="/register " className={classes.Logo}>
            <div className={classes.MenuItem}>REGISTER</div>
          </Link>

          <Link to="/login" className={classes.Logo}>
            <div className={classes.MenuItem}>SIGN IN</div>
          </Link>

          <div className={classes.MenuItem}>
            {" "}
            <Link to="/cart" className={classes.Logo}>
              <Badge color="primary" badgeContent={2}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
