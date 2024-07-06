import React from "react";
import { Link } from "react-router-dom";
import Address from "../../../public/Images/Address.jpg";

function Account() {
  return (
    <>
      <section>
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-4xl text-center font-semibold mt-3">
            Welcome To Account
          </h1>
          <div className="detail grid sm:grid-cols-3 mx-2 gap-3 mt-5">
            <div className="card border-2">
              <Link to="">
                <div className="flex justify-evenly items-center mx-2">
                  <div className="h-[100px]">
                    <img
                      src="https://thumbs.dreamstime.com/b/icon-box-lens-10811256.jpg"
                      alt=""
                      className="h-[100%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">Your Orders</h2>
                    <p>Track, return, or buy things again</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card border-2">
              <Link to="">
                <div className="flex justify-evenly items-center mx-2">
                  <div className="h-[100px]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDv0iDihhEr62uFNPpBTaxteEgtqzTiTOYuYxKQ2sdnMXgSkZX1tMJM08En5s5HHQLHAY&usqp=CAU"
                      alt=""
                      className="h-[100%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">Login & Security</h2>
                    <p>Edit, login, name, and mobile number</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card border-2">
              <Link to="">
                <div className="flex justify-evenly items-center mx-2">
                  <div className="h-[100px]">
                    <img src={Address} alt="" className="h-[100%]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">Your Address</h2>
                    <p>edit addresses for orders and gifts</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card border-2">
              <Link to="">
                <div className="flex justify-evenly items-center mx-2">
                  <div className="h-[100px]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPLhShE-r7kz3xvz128t2lTK__0T8g1pHCQ&s"
                      alt=""
                      className="h-[100%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">Payment Options</h2>
                    <p>edit addresses for orders and gifts</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card border-2">
              <Link to="">
                <div className="flex justify-evenly items-center mx-2">
                  <div className="sm:h-[100px] sm:w-[200px]">
                    <img
                      src="https://thumbs.dreamstime.com/b/user-profile-icon-isolated-glassy-vibrant-sky-blue-round-button-illustration-user-profile-icon-glassy-vibrant-sky-blue-round-167324536.jpg"
                      alt=""
                      className="h-[100%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">Your Profiles</h2>
                    <p>Manage, add, or remove user profiles for personalized experiences</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card border-2">
              <Link to="">
                <div className="flex justify-between items-center mx-2">
                  <div className="h-[100px] sm:w-[250px] sm:ms-5">
                    <img
                      src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/contact_us._CB659962323_.png"
                      alt=""
                      className="h-[100%]"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-medium">Customer Service</h2>
                    <p>Broswe self service options, help articles or contact us</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
