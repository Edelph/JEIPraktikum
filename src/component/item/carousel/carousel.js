import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
import {
  bg_acceuil,
  bg_intro_carriere,
  bg_intro_service,
  stage_image,
  work_image,
  entreprise_image,
} from "../../../assets/images";

const images = [
  bg_acceuil,
  bg_intro_carriere,
  bg_intro_service,
  stage_image,
  work_image,
  entreprise_image,
];

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="container mt-3 ">
        <Slider className="slider" {...settings}>
          {images.map((item, i) => (
            <div key={"image" + i} className="img_item">
              <img className="image_sponsor" src={item} alt={`sponsor ${i}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
