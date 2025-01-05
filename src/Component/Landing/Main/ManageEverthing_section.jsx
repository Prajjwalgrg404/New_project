import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../Main/Mange_images";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-600 z-10"
    >
      <i class="fa-solid fa-caret-left"></i>
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

function MultipleItems() {
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
    <>
      <h1 className="text-[3rem] font-semibold text-center pt-[2rem]">
        Manage Everthing
      </h1>
      <div className="slider-container w-[79%] mx-auto h-full pt-[3rem]">
        <Slider {...settings}>
          {images.map((items, id) => {
            return (
              <div
                key={id}
                className="w-[15rem] h-[29rem]  rounded-2xl overflow-hidden"
              >
                <div
                  style={{ backgroundImage: `url(${items.img})` }}
                  className="w-full h-full object-cover mx-4 rounded-2xl bg-cover"
                >
                  <div className="bg-[rgba(0,0,0,.4)] rounded-2xl w-full h-full flex flex-col justify-end py-6 px-8">
                    <h1 className="text-[1.5rem] font-semibold text-white mb-4 border-t-2 pt-4">
                      {items.name}
                    </h1>
                    <p className="text-lg font-semibold text-white ">
                      {items.text}
                    </p>
                  </div>
                </div>
                {/* <img
                  className="w-full h-full object-cover mx-4 rounded-2xl overflow-hidden"
                  src={items.img}
                  alt=""
                /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default MultipleItems;
