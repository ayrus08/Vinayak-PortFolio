import React from "react";
import instagram from "../../StockFootage/Socials/instagram copy.png";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
const NavBar = () => {
  return (
    <div className="navbar h-[100px] bg-transparent">
      <SideBar />

      <div className="wrapper flex items-center justify-between w-2/3 h-full m-auto">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          Vinayak Surya Teja
        </motion.span>
        <div className="flex social space-x-5 ">
          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="w-[18px] h-[18px]"
            />
          </a>
          <a href="#">
            <img src="linkedin" alt="" className="w-[18px] h-[18px]" />
          </a>
          <a href="#">
            <img src="other" alt="" className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
