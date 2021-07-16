import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import missingData from "../../mock/weather";

import * as classes from "./Weather.module.scss";

const labels = ["Home", "Weather"];
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

const Weather = () => {
  return (
    <div className={classes.Weather}>
      <Slider {...sliderSettingsBuilder()}>
        <section>
          <h2>Home</h2>
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
