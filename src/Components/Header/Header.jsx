import Navigation from "../Navigation/Navigation";
import Banner from "../Banner/Banner";

import missingData from "../../mock/header";

import * as classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.headerRow}>
        <div className={classes.logo}>{missingData.logo}</div>
        <div className={classes.slogan}>
          <span>{missingData.slogan}</span>
        </div>
      </div>
      <Navigation classes={classes} />
      <Banner classes={classes} />
    </div>
  );
};

export default Header;
