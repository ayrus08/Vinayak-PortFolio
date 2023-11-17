import React, { useState } from "react";
import { motion } from "framer-motion";
const SideBar = () => {
  const [isopen, setisOpen] = useState(false);
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];
  const sidebarvarient = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        duration: 0.7,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        duration: 0.7,
      },
    },
  };
  const linksvarient = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={sidebarvarient}
      animate={isopen ? "open" : "closed"}
      className="sidebar flex flex-col items-center justify-center bg-white text-black absolute z-40"
    >
      <motion.div
        variants={linksvarient}
        animate={isopen ? "open" : "closed"}
        className="bg z-10 absolute top-0 left-0 bottom-0 w-[400px] "
      >
        <div className="bg-white absolute w-[100%] h-[100vh] flex flex-col items-center justify-center space-y-2">
          {items.map((item) => (
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item}`}
              key={item}
              className="text-4xl"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <button
        className="w-[50px] h-[50px]  rounded-full absolute top-[25px] z-20 left-[25px] bg-transparent border-none"
        onClick={() => {
          setisOpen((prev) => !prev);
        }}
      >
        <svg width="23" height="23" viewBox="0 0 23 23" className="ml-3.5 mt-1">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default SideBar;
