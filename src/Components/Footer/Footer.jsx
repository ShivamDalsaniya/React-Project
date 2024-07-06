import React from "react";
import Android from "../../../public/Images/Android.png";
import IOS from "../../../public/Images/IOS.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#2A2F2F] mt-[50px] py-10">
        <div className="max-w-[1240px] mx-auto">
          {/* This Is The First Grid Div Of Footer */}
          <div className="grid md:grid-cols-4 grid-cols-2 mx-auto">
            {/* Need Help Div Starts Here */}
            <div className="mx-auto md:mx-0">
              <h2 className="text-white font-primary text-2xl font-semibold">
                Useful Links
              </h2>
              <ol className="my-5 leading-10">
                <li>
                  <Link to="" className="font-secondary text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Career
                  </Link>
                </li>
              </ol>
            </div>
            {/* Need Help Div Ends Here */}

            {/* Company Div Starts Here */}
            <div className="mx-auto md:mx-0">
              <h2 className="text-white font-primary text-2xl font-semibold">
                Company
              </h2>
              <ol className="my-5 leading-10">
                <li>
                  <Link to="" className="font-secondary text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Euphoria Blog
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Euphoristian
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Media
                  </Link>
                </li>
              </ol>
            </div>
            {/* Company Div Ends Here */}

            {/* More Info Div Starts Here */}
            <div className="mx-auto md:mx-0">
              <h2 className="text-white font-primary text-2xl font-semibold">
                More Info
              </h2>
              <ol className="my-5 leading-10">
                <li>
                  <Link to="" className="font-secondary text-white">
                    Term and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Sitemap
                  </Link>
                </li>
              </ol>
            </div>
            {/* More Info Div Ends Here */}

            {/* Location Div Starts Here */}
            <div className="mx-auto md:mx-0">
              <h2 className="text-white font-primary text-2xl font-semibold">
                Location
              </h2>
              <ol className="my-5 leading-10">
                <li>
                  <Link to="" className="font-secondary text-white">
                    support@euphoria.in
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    Eklingpura Chouraha, Ahmedabad Main Road
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-secondary text-white">
                    (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                  </Link>
                </li>
              </ol>
            </div>
            {/* Location Div Ends Here */}
          </div>
          {/* The First Grid Div Of Footer Is Ends Here */}

          {/* This Div Is Of Social Media & App */}
          <div className="my-[35px] flex justify-between items-center flex-wrap">
            <div className="Social-Media flex justify-evenly gap-3 sm:mx-0 mx-auto">
              <Link to="https://www.facebook.com" target="blank">
                <FaFacebookF className="text-4xl bg-white text-dark p-2 rounded-xl" />
              </Link>
              <Link to="https://www.instagram.com" target="blank">
                <FaInstagram className="text-4xl bg-white text-dark p-2 rounded-xl cursor-pointer" />
              </Link>
              <Link to="https://www.twitter.com" target="blank">
                <FaTwitter className="text-4xl bg-white text-dark p-2 rounded-xl cursor-pointer" />
              </Link>
              <Link to="https://www.linkedin.com" target="blank">
                <FaLinkedinIn className="text-4xl bg-white text-dark p-2 rounded-xl cursor-pointer" />
              </Link>
            </div>
            <div className="sm:mx-0 mx-auto">
              <h2 className="font-primary text-3xl text-white font-bold sm:text-start text-center">
                Download The App
              </h2>
              <div className="flex justify-between gap-2 my-4">
                <img src={Android} alt="" />
                <img src={IOS} alt="" />
              </div>
            </div>
          </div>
          {/* The Div Of Social Media & App is Ends Here */}

          {/* This Div Is For Copyright text */}
          <div>
            <p className="font-secondary font-semibold text-white text-center text-xl">
              Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
            </p>
            <p className="font-tertiary text-xl text-center text-white mt-5 max-w-[340px] mx-auto sm:mx-0 sm:max-w-full">
              Design And Developed By:
              <Link to="https://www.linkedin.com/in/shivam-dalsaniya-832477202/" target="_blank">
                <span className="text-amber-400 font-primary font-bold text-2xl ms-2">
                  Shivam Dalsaniya
                </span>
              </Link>
            </p>
            {/* Copyright Div Is Ends Here */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
