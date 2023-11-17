import React from "react";
import ytLogo from "../../StockFootage/YTimages/yt-logo.png";
import ytDp from "../../StockFootage/YTimages/yt-dp.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { SlMenu } from "react-icons/sl";

const YoutubeNavBar = () => {
  let navigate = useNavigate();
  // return <div className="flex items-center h-32"></div>;
  return (
    <div className="flex flex-row items-center justify-between h-14 px-4 md:px-5">
      <div className="h-5 flex justify-center pl-10 cursor-pointer">
        <div
          className="flex md:mr-6 cursor-pointer items-center justify-center h-5 w-8 rounded-full hover:bg-[#303030]/[0.6]"
          // onClick={mobileMenuToggle}
        >
          <SlMenu className="text-white text-xl" />
        </div>
        <img
          className="h-full dark:md:block"
          src={ytLogo}
          alt="Youtube"
          onClick={() => {
            navigate("/youtube");
          }}
        />
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            // onChange={(e) => setSearchQuery(e.target.value)}
            // onKeyUp={searchQueryHandler}
            placeholder="Search"
            // value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          // onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src={ytDp} />
        </div>
      </div>
    </div>
  );
};

export default YoutubeNavBar;
