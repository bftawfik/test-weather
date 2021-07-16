import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";

import Navigation from "../Navigation/Navigation";
import { getWeather } from "../../services/services";
import { addCityName, addCityFullWeather } from "../../redux/city/citySlice";

import missingData from "../../mock/weather";

import * as classes from "./Weather.module.scss";

const labels = ["Home", "Weather"];

const DataComp = ({ classes, stateCity }) => (
  <div className={classes.data}>
    <h2>{stateCity.name}</h2>
    {stateCity.weather.icon && (
      <img
        src={`http://openweathermap.org/img/wn/${stateCity.weather.icon}@2x.png`}
        alt={stateCity.weather.description}
      />
    )}
    <h3>{stateCity.weather.title}</h3>
    <p className={classes.temp}>
      {stateCity.temp.value}
      <sup>°</sup>
    </p>
    <p className={classes.tempRang}>
      {stateCity.temp.max}
      <sup>°</sup> {stateCity.temp.min}
      <sup>°</sup>
    </p>
    <p className={classes.state}>{stateCity.weather.description}</p>
  </div>
);

const Weather = () => {
  const slider = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { userCity: stateUserCity, inputCity: stateInputCity } = useSelector(
    (state) => state.city
  );
  const { name: stateInputCityName } = stateInputCity;
  console.log(stateInputCity);

  const sliderSettingsBuilder = () => ({
    swipe: false,
    infinite: false,
    autoplay: false,
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    arrows: true,
    className: classes.slider,
    accessibility: true,
    focusOnSelect: false,
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div>
          <span>{labels[i]}</span>
        </div>
      );
    },
  });

  const goTo = (id) => {
    console.log(slider.current.slickGoTo);
    slider?.current?.slickGoTo(id);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addCityName({ type: "input", value: inputValue }));
  };

  const fetchLocalWeather = async (
    dispatch,
    addCityFullWeather,
    stateInputCityName
  ) => {
    try {
      const response = await getWeather(stateInputCityName);
      const data = response.data;
      const weather = data.weather.length > 0 ? data.weather[0] : undefined;
      dispatch(
        addCityFullWeather({
          type: "input",
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
    if (stateInputCityName) {
      fetchLocalWeather(dispatch, addCityFullWeather, stateInputCityName);
    }
  }, [dispatch, stateInputCityName]);

  return (
    <div className={classes.Weather}>
      <Navigation
        asButtons={true}
        classes={classes}
        navigationList={missingData.navigation.map((item, ndx) => ({
          ...item,
          handler: () => goTo(ndx),
        }))}
      />
      <Slider {...sliderSettingsBuilder()} ref={slider}>
        <section className={classes.slide}>
          <div className={classes.contents}>
            <h2 className={classes.title}>Home</h2>
            {<DataComp classes={classes} stateCity={stateUserCity} />}
            <button
              onClick={(e) => {
                e.preventDefault();
                goTo(1);
              }}
            >
              Choose a City !
            </button>
          </div>
        </section>
        <section className={classes.slide}>
          <div className={classes.contents}>
            <h2 className={classes.title}>{missingData.title}</h2>
            <h3 className={classes.subtitle}>{missingData.subtitle}</h3>
            <form className={classes.form} onSubmit={submitHandler}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                size={1}
              />
              <button type="submit">{missingData.submit}</button>
            </form>
            {stateInputCity.name !== undefined && (
              <DataComp classes={classes} stateCity={stateInputCity} />
            )}
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default Weather;
