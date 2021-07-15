import Weather from "../../Components/Weather/Weather";

import * as Classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={Classes.Home}>
      <Weather />
    </div>
  );
};

export default Home;
