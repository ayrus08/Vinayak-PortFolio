import React from "react";
import hero from "../../StockFootage/Socials/newing.png";
import { animate, motion } from "framer-motion";

const Hero = () => {
  const textvarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    imageanimate: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: "38%",
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,

        duration: 40,
      },
    },
  };

  return (
    <div className="hero h-[calc(100vh-100px)] bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden relative">
      <motion.div
        variants={sliderVariants}
        animate="animate"
        initial="initial"
        className="bgslidingcontainer  absolute  text-[50vh] top-60  text-[#ffffff09] whitespace-nowrap"
      >
        Passionate Programmer
      </motion.div>
      <motion.div
        variants={textvarients}
        initial={"initial"}
        animate={"animate"}
        className="textcontainer h-full flex items-center ml-5 md:ml-44 "
      >
        <motion.div
          variants={textvarients}
          className="flex flex-col w-full md:w-1/2  gap-10 z-30"
        >
          <motion.h2
            variants={textvarients}
            className=" text-5xl text-[rgb(102,51,153)] "
          >
            Hello, I'm Vinayak
          </motion.h2>
          <motion.h1 variants={textvarients} className="text-2xl">
            I am a Full Stack developer with a strong passion for software
            development, seeking opportunities to leverage my skills as a
            Developer
          </motion.h1>
          <motion.div variants={textvarients} className="buttons space-y-2">
            <motion.button
              variants={textvarients}
              className=" p-5 border border-white rounded-lg mr-5 font-light"
              onClick={() => {
                console.log("first");
              }}
            >
              See my Latest Works
            </motion.button>
            <motion.button
              variants={textvarients}
              className=" p-5 border border-white rounded-lg mr-5 font-light"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.div variants={textvarients} className="flex space-x-2">
            <motion.img
              variants={textvarients}
              animate="imageanimate"
              src="random"
              alt=""
              className="w-fit h-full"
            />
            <motion.span variants={textvarients} animate="imageanimate">
              Scroll
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      <img
        src={hero}
        alt=""
        className="h-full hidden sm:block sm:opacity-30 lg:opacity-100 absolute bottom-0 mb-10 right-0 z-0"
      />
    </div>
  );
};

export default Hero;
