import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Components/Header/Header";
import News from "./Pages/News/News";
import Forcast from "./Pages/Forcast/Forcast";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Contactus from "./Pages/Contactus/Contactus";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

import { getLocation, getWeather } from "./services/services";
import { addCityName, addCityFullWeather } from "./redux/city/citySlice";

function App() {
  const stateUserCityName = useSelector((state) => state.city.userCity.name);
  const dispatch = useDispatch();

  const fetchUserLocation = async (dispatch, addCityName, stateUserCityName) => {
    try {
      const response = await getLocation();
      const { city } = response.data;
      if (stateUserCityName === undefined) {
        dispatch(addCityName({ type: "user", value: city }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLocalWeather = async (
    dispatch,
    addCityFullWeather,
    stateUserCityName
  ) => {
    try {
      const response = await getWeather(stateUserCityName);
      const data = response.data;
      const weather = data.weather.length > 0 ? data.weather[0] : undefined;
      dispatch(
        addCityFullWeather({
          type: "user",
          value: {
            temp: {
              value: data.main.temp,
              min: data.main.temp_min,
              max: data.main.temp_max,
            },
            weather:
              weather === undefined
                ? weather
                : {
                    title: weather.main,
                    icon: weather.icon,
                    description: weather.description,
                  },
          },
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserLocation(dispatch, addCityName, stateUserCityName);
  }, [dispatch, stateUserCityName]);

  useEffect(() => {
    if (stateUserCityName) {
      fetchLocalWeather(dispatch, addCityFullWeather, stateUserCityName);
    }
  }, [dispatch, stateUserCityName]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/forcast">
          <Forcast />
        </Route>
        <Route path="/aboutus">
          <Aboutus />
        </Route>
        <Route path="/contactus">
          <Contactus />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
