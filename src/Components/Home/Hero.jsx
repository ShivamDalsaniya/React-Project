import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Joggers from "../../../public/Images/Joggers.png";
import Sleve from "../../../public/Images/Full-Sleve.png";
import Tshirt from "../../../public/Images/T-shirt.png";
import Urban from "../../../public/Images/Urban.png";
import RedShirt from "../../../public/Images/Red-Shirt.png";
import Black from "../../../public/Images/Black_T-Shirts.png";
import Plain from "../../../public/Images/Plain_T-Shirt.png";
import Polo from "../../../public/Images/Polo.png";
import Hoodie from "../../../public/Images/Hoodie.png";
import Jeans from "../../../public/Images/Jeans.png";
import Active from "../../../public/Images/Active.png";
import Boxer from "../../../public/Images/Boxer.png";
import Hoodie1 from "../../../public/Images/Hoodie1.png";
import Coats from "../../../public/Images/Coats.png";
import Tees from "../../../public/Images/Tees.png";
import Boxer1 from "../../../public/Images/Boxer1.png";
import Nike from "../../../public/Images/Nike.png";
import Hm from "../../../public/Images/H&M.png";
import Levis from "../../../public/Images/Levis.png";
import USPOLO from "../../../public/Images/USPOLO.png";
import Puma from "../../../public/Images/Puma.png";
import Sweet from "../../../public/Images/Black.png";
import Line from "../../../public/Images/Line.png";
import Shorts from "../../../public/Images/Shorts.png";
import Lavendar from "../../../public/Images/Lavendar.png";
import Review1 from "../../../public/Images/Review1.png";
import Review2 from "../../../public/Images/Review2.png";
import Review3 from "../../../public/Images/Review3.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  const banner = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const LimeLight = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Hero Section Or Slider Section */}
      <section style={{ overflow: "hidden", height: "91vh" }}>
        {/* Slider Starts here */}
        <Slider {...banner}>
          <div className="Hero1" style={{ width: "100%" }}>
            <div className="ms-5">
              <p className="sm:text-4xl text-xl font-light font-secondary">
                Shopping Season
              </p>
              <h1 className="sm:text-7xl text-3xl font-primary font-extrabold md:mt-3 mt-0">
                SUMMER
              </h1>
              <p className=" md:text-4xl text-xl md:my-3 my-0 font-secondary">
                SALE UP TO 80%
              </p>
              <button className="bg-white p-[5px_14px] md:text-2xl text-xl font-bold font-tertiary mt-3">
                Shop Now
              </button>
            </div>
          </div>

          {/* This Is 2nd Div For Second Slider Image */}
          <div className="Hero2" style={{ width: "100%" }}>
            <div className="ms-5">
              <p className="sm:text-4xl text-xl text-white font-light font-secondary">
                T-Shirt / Tops
              </p>
              <h1 className="sm:text-7xl text-3xl text-white font-primary font-extrabold md:mt-3 mt-0">
                Summer Value Pack
              </h1>
              <p className="text-white md:text-4xl text-xl md:my-3 my-0 font-secondary">
                <span>Cool / </span> <span> Colorful / </span>
                <span> Comfy / </span>
              </p>
              <Link to="/ProductSHop">
                <button className="bg-white p-[5px_14px] md:text-2xl text-xl font-bold font-tertiary mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          {/* Second Slider Div Ends Here */}

          {/* This Is The 3rd Slider Image Div Starts Here */}
          <div className="Hero3" style={{ width: "100%" }}>
            <div className="ms-5">
              <h2 className="md:text-7xl text-3xl font-primary font-bold tracking-wider text-white">
                Hawaiin Shirts
              </h2>
              <p className="text-white font-secondary md:text-4xl text-2xl md:my-2 my-0">
                Dress up in summer vibe
              </p>
              <h3 className="font-secondary text-white md:text-3xl text-xl">
                UPTO 50% OFF
              </h3>
              <button className="sm:p-[15px_25px] p-[10px_15px] text-white bg-transparent border border-white sm:mt-8 mt-0 font-tertiary md:text-2xl text-lg rounded-xl">
                SHOP NOW
              </button>
            </div>
          </div>
          {/* 3rd Slider Image Div Ends Here */}
        </Slider>
        {/* Slider Ends Here */}
      </section>
      {/* Hero Section Ends Here */}

      {/* This Is The Second Section This Section Contains Two Div */}
      <section className="my-[45px]">
        {/* This Div Is For Grid Design This Div Contains Both Cards Of The 2nd Section */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 max-w-[1240px] mx-auto">
          {/* This Is 1st Card Of This Section */}
          <div className="Coziness flex items-center rounded-lg mx-2 shadow-gray-400 shadow-xl ">
            <div className="">
              <p className="font-secondary ms-5 text-white font-medium text-2xl">
                Low Price
              </p>
              <h2 className="font-primary font-bold text-4xl text-white mt-5 ms-4">
                High Coziness
              </h2>
              <p className="font-secondary text-2xl text-white ms-4 my-5">
                UPTO 50% OFF
              </p>
              <button className="font-secondary text-xl font-semibold ms-4 text-white">
                Explore Items
              </button>
            </div>
          </div>
          {/* The 1st card Ends Here */}

          {/* 2nd card Starts Here */}
          <div className="Breezy flex items-center rounded-lg mx-2 shadow-gray-400 shadow-xl">
            <div className="">
              <p className="font-secondary ms-5 text-white font-medium text-2xl">
                Beyoung Presents
              </p>
              <h2 className="font-primary font-bold text-4xl text-white mt-5 ms-4">
                Breezy Summer Style
              </h2>
              <p className="font-secondary text-2xl text-white ms-4 my-5">
                UPTO 50% OFF
              </p>
              <button className="font-secondary text-xl font-semibold ms-4 text-white">
                Explore Items
              </button>
            </div>
          </div>
          {/* 2nd card Ends here */}
        </div>
        {/* The Div Which Contains Both Card Of The 2nd Section Ends Here */}
      </section>
      {/* The 2nd Section Ends Here */}

      {/* 3rd Section Starts From here This Is New Arrival Section */}
      <section>
        <div className="max-w-[1240px] mx-auto">
          <h2 className="font-tertiary text-4xl font-semibold mx-2">
            New Arrival
          </h2>

          {/* This Div Is For Arrival Cards */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
            <div className="card mx-2">
              <img
                src={Joggers}
                alt=""
                style={{ width: "100%" }}
                className="rounded-xl"
              />
              <h3 className="font-primary text-3xl font-semibold mt-4">
                Knitted Joggers
              </h3>
            </div>
            <div className="card mx-2">
              <img
                src={Sleve}
                alt=""
                style={{ width: "100%" }}
                className="rounded-xl"
              />
              <h3 className="font-primary text-3xl font-semibold mt-4">
                Full Sleeve
              </h3>
            </div>
            <div className="card mx-2">
              <img
                src={Tshirt}
                alt=""
                style={{ width: "100%" }}
                className="rounded-xl"
              />
              <h3 className="font-primary text-3xl font-semibold mt-4">
                Stylish t-shirts
              </h3>
            </div>
            <div className="card mx-2">
              <img
                src={Urban}
                alt=""
                style={{ width: "100%" }}
                className="rounded-xl"
              />
              <h3 className="font-primary text-3xl font-semibold mt-4">
                Urban Shirts
              </h3>
            </div>
          </div>
          {/* Arrival Card Div Ends Here */}
        </div>
      </section>
      {/* 3rd Section Ends Here */}

      {/* 4th Section Starts Here */}
      <section className="my-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl font-tertiary font-semibold">
            Big Saving Zone
          </h2>
          {/* First Three Cards Div Starts Here */}
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:gap-3 gap-5 mt-8 lg:mx-0 mx-2">
            <div className="Hawai rounded-xl flex items-center">
              <div>
                <h2 className="font-secondary max-w-[200px] text-4xl text-white ms-5">
                  Hawain Shirts
                </h2>
                <p className="font-secondary text-white text-2xl max-w-[280px] ms-5">
                  Dress Up In Summer Vibe
                </p>
                <h3 className="font-secondary text-white text-xl ms-5">
                  Upto 50% Off
                </h3>
                <button className="font-tertiary text-2xl bg-transparent border border-white p-[8px_12px] ms-5 mt-5 text-white">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="Print rounded-xl flex items-center ">
              <div className="ms-auto me-2">
                <div className="text-right mb-3">
                  <button className="font-tertiary p-[8px_12px] bg-black text-white">
                    Limited Stock
                  </button>
                </div>
                <h3 className="font-secondary text-2xl max-w-[110px] text-white ms-auto">
                  Printed T-shirt
                </h3>
                <p className="font-secondary text-lg text-white">
                  New Designs Every Week
                </p>
                <p className="font-secondary text-lg text-white text-right">
                  UPTO 40% OFF
                </p>
                <div className="text-right">
                  <button className="font-tertiary text-2xl bg-transparent border border-white p-[8px_12px] mt-5 text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="Cargo rounded-xl flex items-center">
              <div className="ms-auto">
                <h3 className="font-primary text-2xl text-white max-w-[150px] font-semibold">
                  Cargo Joggers
                </h3>
                <p className="font-secondary text-lg text-white max-w-[180px]">
                  Move with style & comfort
                </p>
                <p className="font-secondary font-semibold text-xl text-white">
                  Upto 50% OFF
                </p>
                <div className="mt-3 text-white">
                  <button className="font-tertiary p-[8px_12px] border border-white text-2xl">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* First Three Cards Div Ends Here */}

          {/* Second Two Cards Div Starts Here */}
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-5 mx-2 lg:mx-0 sm:mt-3 mt-5">
            <div className="Urban rounded-xl flex items-center">
              <div className="ms-auto me-2">
                <h3 className="font-primary font-semibold text-3xl">
                  Urban Shirts
                </h3>
                <p className="font-secondary text-xl my-3">Live In Comfort</p>
                <h4 className="font-primary text-2xl font-semibold">
                  FLAT 60% OFF
                </h4>
                <button className="p-[10px_15px] border border-black border-2 mt-5">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="Oversize rounded-xl flex items-center">
              <div className="ms-auto me-2">
                <h3 className="font-primary font-semibold text-3xl max-w-[180px]">
                  Oversized T-Shirts
                </h3>
                <p className="font-secondary text-xl my-3">Street Style Icon</p>
                <h4 className="font-primary text-2xl font-semibold">
                  FLAT 60% OFF
                </h4>
                <button className="p-[10px_15px] border border-black border-2 mt-5">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          {/* Second Two Cards Div Ends Here */}
        </div>
      </section>
      {/* 4th Section Ends Here */}

      {/* 5th Section Starts Here */}
      <section className="my-50px">
        <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 mx-auto">
          <div className="Fashion flex items-center rounded-l-lg">
            <div className="mx-auto">
              <h2 className="text-4xl text-white max-w-[466px] font-primary font-bold">
                WE MADE YOUR EVERYDAY FASHION BETTER
              </h2>
              <p className="font-secondary text-white max-w-[451px] my-7">
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </p>
              <button className="font-tertiary bg-white text-black p-[10px_15px] rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
          <div className="Bg-img rounded-r-lg"></div>
        </div>
      </section>
      {/* 5th Section Ends Here */}

      {/* 6th Section Man's Category Section Starts Here */}
      <section className="my-[50px]" id="Men">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="font-tertiary text-4xl font-semibold sm:text-start text-center">
            Categories For Men
          </h2>
          {/* This Grid Is For Man's Category Cards */}
          <div className="mt-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={RedShirt} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Shirts
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Black} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Printed T-Shirts
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Plain} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Plain T-Shirt
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Polo} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Polo T-Shirt
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Hoodie} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Hoodies & Sweetshirt
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Jeans} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">Jeans</p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Active} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Activewear
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Boxer} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Boxers
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section Ends Here */}

      {/* 7th Section Starts Here This Section Is For Women's Category */}
      <section className="my-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="font-tertiary text-4xl font-semibold sm:text-start text-center">
            Categories For Women
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-9">
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Hoodie1} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Hoodies & Sweetshirt
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Coats} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Coats & Parkos
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Tees} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Tees & T-shirt
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
            <div className="mx-auto hover:shadow-gray-400 hover:shadow-lg duration-1000">
              <img src={Boxer1} alt="" className="rounded-lg" />
              <p className="font-secondary font-semibold text-xl my-2">
                Boxers
              </p>
              <div className="flex items-center">
                <button className="font-secondary text-lg">Explore Now </button>
                <BsArrowRight className="ms-auto text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7th Section Ends Here */}

      {/* 8th Section Starts Here */}
      <section className="my-[64px] bg-[#3C4242]">
        <div className="max-w-[1240px] mx-auto flex items-center h-full py-10">
          <div className="mx-auto p-2">
            <h2 className="font-primary font-bold text-center text-white text-5xl">
              Top Brands Deal
            </h2>
            <p className="font-secondary text-lg text-white text-center my-4">
              Up To <span className="text-yellow-400">60%</span> off on Brands{" "}
            </p>
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 ">
              <img src={Nike} alt="" className="mx-auto" />
              <img src={Hm} alt="" className="mx-auto" />
              <img src={Levis} alt="" className="mx-auto" />
              <img src={USPOLO} alt="" className="mx-auto" />
              <img src={Puma} alt="" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* 8th Section Ends Here */}

      {/* 9th Section Starts Here */}
      <section className="my-[64px]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="font-tertiary text-4xl font-semibold sm:text-start text-center">
            In The Limelight
          </h2>
          <div className="my-8">
            <Slider {...LimeLight}>
              <div className="sm:max-w-[282px]">
                <img
                  src={Sweet}
                  alt=""
                  className="w-full sm:w-auto rounded-xl"
                />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h3 className="font-secondary font-semibold">
                      Black Sweetshirts
                    </h3>
                    <p className="font-secondary">Jhanvi's Brand</p>
                  </div>
                  <div className="">
                    <button className="font-tertiary bg-[#f6f6f6] text-black p-[5px_5px]">
                      $123.00
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:max-w-[282px] mx-auto">
                <img
                  src={Line}
                  alt=""
                  className="w-full sm:w-auto rounded-xl"
                />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h3 className="font-secondary font-semibold ">
                      Line Pattern Black Shirt
                    </h3>
                    <p className="font-secondary">AS’s Brand</p>
                  </div>
                  <div className="">
                    <button className="font-tertiary bg-[#f6f6f6] text-black p-[5px_5px]">
                      $37.00
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:max-w-[282px] mx-auto">
                <img
                  src={Shorts}
                  alt=""
                  className="w-full sm:w-auto rounded-xl"
                />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h3 className="font-secondary font-semibold ">
                      Black Shorts
                    </h3>
                    <p className="font-secondary">MM’s Brand</p>
                  </div>
                  <div className="">
                    <button className="font-tertiary bg-[#f6f6f6] text-black p-[5px_5px]">
                      $37.00
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:max-w-[282px] mx-auto">
                <img
                  src={Lavendar}
                  alt=""
                  className="w-full sm:w-auto rounded-xl"
                />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h3 className="font-secondary font-semibold ">
                      Lavander Hoodie
                    </h3>
                    <p className="font-secondary">Nike's Brand</p>
                  </div>
                  <div className="">
                    <button className="font-tertiary bg-[#f6f6f6] text-black p-[5px_5px]">
                      $37.00
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* 9th Section Ends Here */}

      {/* Feeback Section Starts Here */}
      <section className="my-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="font-tertiary text-4xl font-semibold sm:text-start text-center">
            Feedback
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8 mx-4 sm:mx-0">
            <img src={Review1} alt="" className="mx-auto" />
            <img src={Review2} alt="" className="mx-auto" />
            <img src={Review3} alt="" className="mx-auto" />
          </div>
        </div>
      </section>
      {/* Feedback Section Ends Here */}
    </>
  );
}

export default Hero;
