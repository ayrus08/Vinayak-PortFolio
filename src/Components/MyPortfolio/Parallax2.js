import React, { useEffect } from "react";
import { motion, useTransform } from "framer-motion";

const Parallax2 = ({ scrollYProgress }) => {
  const yText = useTransform(scrollYProgress, [0.375, 0.5], ["-200%", "300%"]);
  const yBg_planets = useTransform(
    scrollYProgress,
    [0.375, 0.5],
    ["-100%", "100%"]
  );
  const xBg_stars = useTransform(
    scrollYProgress,
    [0.375, 0.5],
    ["-75%", "100%"]
  );

  useEffect(() => {
    console.log(yText);

    console.log("first");
  }, [yText.current]);
  return (
    <div className="parallax bg-gradient-to-b from-[#111132] to-[#0c0c1d] w-full h-full relative flex items-center justify-center overflow-hidden">
      <motion.h1 style={{ y: yText }} className="ml-16 md:ml-0 text-[100px]">
        My Projects?
      </motion.h1>
      <motion.div
        className="mountains bg-[url('./StockFootage/Socials/mountains.png')] w-full h-full bg-cover bg-bottom absolute z-10"
        // style={{""}}
      ></motion.div>
      <motion.div
        style={{ y: yBg_planets }}
        className="planets bg-[url('./StockFootage/Socials/planets.png')] w-full h-full bg-cover bg-bottom absolute z-10 "
      ></motion.div>
      <motion.div
        style={{ x: xBg_stars }}
        className="stars bg-[url('./StockFootage/Socials/stars.png')] w-full h-full bg-cover bg-bottom absolute"
      ></motion.div>
    </div>
  );
};

export default Parallax2;
