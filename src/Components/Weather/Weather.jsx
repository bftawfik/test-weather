import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navigation from "../Navigation/Navigation";

import missingData from "../../mock/weather";

import * as classes from "./Weather.module.scss";

const labels = ["Home", "Weather"];

const Weather = () => {
  const slider = useRef(null);

  const sliderSettingsBuilder = () => ({
    swipe: false,
    infinite: false,
    autoplay: false,
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    arrows: true,
    className: classes.slider,
    accessibility: true,
    focusOnSelect: true,
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
    slider.current.slickGoTo(id);
  };
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
          </div>
        </section>
        <section className={classes.slide}>
          <div className={classes.contents}>
            <h2 className={classes.title}>{missingData.title}</h2>
            <h3 className={classes.subtitle}>{missingData.subtitle}</h3>
            <form className={classes.form}>
              <input type="text" />
              <button type="submit">{missingData.submit}</button>
            </form>
            <div className={classes.data}>
              <h2>Poland, US</h2>
              <i src="" />
              <h3>Clear</h3>
              <p className={classes.temp}>
                -4.76<sup>°</sup>
              </p>
              <p className={classes.tempRang}>
                -5.35<sup>°</sup> -3.29<sup>°</sup>
              </p>
              <p className={classes.state}>Clear sky</p>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default Weather;
