import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../Main/Ourservices_details";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-600 z-10"
    >
      <i className="fa-solid fa-caret-left"></i>
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-600 z-10"
    >
      <i className="fa-solid fa-caret-right"></i>
    </button>
  );
};

function Ourservices() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-[3rem] font-semibold text-center pt-[2rem]">
      Our Services
      </h1>
      <p className="text-lg text-center">We offer a full range of home automation, AV and IT solutions for residential and commercial customers.</p>
      <div className="slider-container w-[80%] mx-auto h-full pt-[3rem]">
        <Slider {...settings}>
          {images.map((items, id) => {
            return (
              <div
                key={id}
                className="w-[25rem] bg-red-200 h-[25rem] rounded-2xl overflow-hidden"
              >
                <div
                  style={{ backgroundImage: `url(${items.img})` }}
                  className="w-full h-full bg-cover flex flex-col justify-end"
                >
                  <div className="bg-[rgba(0,0,0,.4)] py-4 w-full h-[10rem] flex flex-col justify-end">
                    <h1 className="text-[1.5rem] font-semibold text-white mb-4 px-4 pt-4">
                      {items.name}
                    </h1>
                    <p className="text-lg font-semibold text-white px-4 ">
                      {items.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Ourservices;
