import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import missingData from "../../mock/weather";

import * as classes from "./Weather.module.scss";

const labels = ["Home", "Weather"];
const sliderSettingsBuilder = () => ({
  dragging: false,
  infinite: false,
  autoplay: false,
  dots: true,
  dotsClass: `slick-dots ${classes.dots}`,
  arrows: false,
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
  // nextArrow: (
  //   <NextArrow>
  //     <RightArrowWide className={styles.arrows} />
  //   </NextArrow>
  // ),
  // prevArrow: (
  //   <PrevArrow>
  //     <LeftArrowWide className={styles.arrows} />
  //   </PrevArrow>
  // ),
});

const Weather = () => {
  return (
    <div className={classes.Weather}>
      <Slider {...sliderSettingsBuilder()}>
        <section>
          <h2>Home</h2>
        </section>
        <section>
          <h2>{missingData.title}</h2>
          <h3>{missingData.subtitle}</h3>
          <form>
            <input type="text" />
            <button type="submit">{missingData.submit}</button>
          </form>
        </section>
      </Slider>
    </div>
  );
};

export default Weather;
