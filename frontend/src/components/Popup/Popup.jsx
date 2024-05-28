import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div>
          <div
            className={`h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm`}
          >
            <div
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]`}
            >
              {/* header */}
              <div className={`flex items-center justify-between`}>
                <div>
                  <h1 className={`text-2xl font-bold text-dark`}>Login</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className={`text-2xl cursor-pointer`}
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>
              {/* login form secition */}
              <div className={`mt-4 space-y-4`}>
                <input
                  className={`w-full py-1 px-2 border  dark:border-gray-500 rounded-md `}
                  type="email"
                  placeholder="Enter Email"
                />
                <input
                  className={`w-full py-1 px-2 border  dark:border-gray-500 rounded-md `}
                  type="password"
                  placeholder="Enter Password"
                />
                <button
                  className={`item-center bg-primary w-full p-2 rounded-md text-white`}
                >
                  Login
                </button>
              </div>
              {/* social Handles */}
              <div className={`mt-4 `}>
                <p className={`text-center`}>or login with</p>
                <div className={`flex items-center justify-center gap-2 mt-2`}>
                  <FaFacebook
                    className={`text-3xl hover:text-blue-500 duration-200 `}
                  />
                  <FaGoogle
                    className={`text-3xl hover:text-red-500 duration-200 `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
