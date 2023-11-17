import React, { useState } from "react";
// import BgVideo from "../StockFootage/BgVideo-LoginPage.mp4";
import BgVideo from "../StockFootage/Stars.mp4";
import chopperHand from "../StockFootage/ChopperHands.png";
import chopperHead from "../StockFootage/ChopperHead.png";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [passwordonfocus, setPasswordonFocus] = useState(false);
  const ChopperHand = document.querySelector(".chopper-hand");
  return (
    <div className="h-[100vh] w-full">
      <video
        id="backGroundVideo"
        src={BgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      ></video>
      <div className="absolute flex  top-0 items-center justify-center w-full h-full">
        <div className=" w-1/2 md:1/3 lg:w-1/4 space-y-6">
          <div className="flex justify-center">
            <img class="chopper-head" src={chopperHead} alt="head" />
            {passwordonfocus && (
              <motion.div
                animate={{ y: -50, scale: 1 }}
                transition={{ type: "spring" }}
                // initial={{ scale: 0 }}
                className="absolute flex items-center pl-3 mt-2 pt-36"
              >
                <img class="chopper-hand" src={chopperHand} alt="hand" />
              </motion.div>
            )}
            {!passwordonfocus && (
              <motion.div
                animate={{ y: 50, scale: 0 }}
                className="absolute flex items-center pl-3 mt-2 pt-36"
              >
                <img class="chopper-hand" src={chopperHand} alt="hand" />
              </motion.div>
            )}
          </div>
          <div class="relative">
            <input
              type="text"
              id="floating_filled"
              class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-white border-0 appearance-none text-gray-900 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              UserName
            </label>
          </div>
          <div class="relative">
            <input
              type="password"
              id="floating_filled"
              class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-white border-0 appearance-none text-gray-900 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
              onFocus={() => {
                setPasswordonFocus(true);
                console.log("first");
              }}
              onBlur={() => setPasswordonFocus(false)}
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>

          <div className="">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center h-0">
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <p className="mx-4 text-gray-400 font-bold">OR</p>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
          </div>

          {/* OTHER LOGIN METHODS */}

          <div className="flex justify-between">
            <div>
              <button
                type="button"
                class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Facebook
              </button>
            </div>
            <div>
              <button
                type="button"
                class="text-white bg-[#111516] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#050708]/50 hover:bg-[#050708]/30 mr-2 mb-2 hover:custom-cursor"
              >
                <svg
                  class="w-5 h-5 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                Apple
              </button>
            </div>
            <div>
              <button
                type="button"
                class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
