import Weather from "../../Components/Weather/Weather";

import * as classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Weather />
    </div>
  );
};

export default Home;
