import React from "react";
import Error from "../../../public/Images/404.gif";
import { Link } from "react-router-dom";

function PageNot() {
  return (
    <>
      <div className="container mt-6">
        <div className="max-w-[1530px] mx-auto">
          <img
            src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
            alt=""
            className="mx-auto"
          />
          <div className="text-center">
            <Link to="/">
              <button className="font-tertiary font-semibold bg-black text-white p-[10px_15px] rounded-xl">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNot;
