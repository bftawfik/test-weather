import Navigation from "../Navigation/Navigation";
import Banner from "../Banner/Banner";

import missingData from "../../mock/header";

import * as Classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Classes.Header}>
      <div className={Classes.logo}>{missingData.logo}</div>
      <div>{missingData.slogan}</div>
      <Navigation />
      <Banner />
    </div>
  );
};

export default Header;
