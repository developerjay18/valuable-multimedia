"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "@/data/home_data.json";

function Testimonials() {
  const { testimonials } = data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <div className="testimonials-section-home flex bg-[#ececec] mx-5 lg:mx-10 rounded-xl px-5 lg:px-[8rem] lg:pt-16 lg:pb-12 py-8">
      <div className="left hidden lg:block w-[20%]">
        <Image
          src={
            "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719837575/home/uetf6qm9tnh5j3mosphg.webp"
          }
          alt="test-hand-image"
          width={200}
          height={200}
        />
      </div>

      <div className="middle w-[100%] lg:w-[60%] flex flex-col gap-y-8 lg:gap-y-16">
        <h2 className="text-3xl lg:text-4xl text-gray-400 text-center">
          That&apos;s what our Clients said!
        </h2>

        <div className=" w-[100%] lg:w-[80%] mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial ${index + 1}`} className="testimonial">
                <p className="text-center lg:text-lg">
                  <span className="border-b border-themeOrange leading-[2rem] pb-1">
                    {testimonial.feedback}
                  </span>
                </p>

                <div className="mt-5 lg:mt-16 text-center capitalize">
                  <h3 className="text-xl text-themeOrange font-medium">
                    {testimonial.name}
                  </h3>
                  <div className="text-gray-400 text-xl">
                    {testimonial.client}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="right hidden lg:block w-[20%]">
        <Image
          src={
            "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719837577/home/fjgc1awtgm9v4eum5txy.webp"
          }
          alt="test-hand-image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Testimonials;
