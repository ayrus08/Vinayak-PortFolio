import React, { useEffect, useRef, useState } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiSocketdotio } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const TechStack = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const [ani, setani] = useState(false);
  const textvarients = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };
  const TechStack = [
    {
      icon: <FaHtml5 size={100} color="black" />,
      name: "HTML",
    },
    {
      icon: <IoLogoJavascript size={100} color="black" />,
      name: "Java Script",
    },
    {
      icon: <SiTailwindcss size={100} color="black" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiCplusplus size={100} color="black" />,
      name: "C++",
    },
    {
      icon: <FaJava size={100} color="black" />,
      name: "JAVA",
    },
    {
      icon: <FaReact size={100} color="black" />,
      name: "React",
    },

    {
      icon: <SiMongodb size={100} color="black" />,
      name: "mongoDB",
    },
    {
      icon: <FaNode size={100} color="black" />,
      name: "NodeJS",
    },
    {
      icon: <TbSql size={100} color="black" />,
      name: "SQL",
    },
    {
      icon: <SiSocketdotio size={100} color="black" />,
      name: "Socket.io",
    },
    {
      icon: <DiRedis size={100} color="black" />,
      name: "Redis",
    },
    {
      icon: <SiApachekafka size={100} color="black" />,
      name: "Kafka",
    },
  ];
  useEffect(() => {
    console.log("Element is in view: ", isInView);
    setani(isInView);
  }, [isInView]);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full text-[40px] font-semibold py-10">
        <span>My TechStack</span>
      </div>
      <div className="h-[calc(100vh-200px)] flex w-full items-center justify-center">
        <div
          ref={ref}
          className="w-2/3 h-full md:w-3/4 flex justify-center items-center"
        >
          {ani && (
            <motion.div
              variants={textvarients}
              animate="animate"
              initial="initial"
              className="flex flex-wrap h-full w-full p-4 overflow-y-scroll justify-center overflow-hidden"
            >
              {TechStack.map((skill, index) => (
                <motion.div
                  variants={textvarients}
                  className={`w-2/5 pb-2 sm:pb-0 sm:w-1/4 md:w-1/6 h-fit sm:py-2 md:py-4 flex flex-col mb-4 items-center text-black space-y-2 rounded-lg mr-3 ml-2 md:ml-0 md:mr-8
               bg-white
             `}
                >
                  <div variants={textvarients}>{skill.icon} </div>
                  <div variants={textvarients}>{skill.name} </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
