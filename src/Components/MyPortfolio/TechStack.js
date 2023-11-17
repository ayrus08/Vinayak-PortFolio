import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
const TechStack = () => {
  const skills = [
    {
      icon: <FaHtml5 size={100} color="black" />,
      name: "HTML",
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
      icon: <SiTailwindcss size={100} color="black" />,
      name: "Tailwind CSS",
    },
    {
      icon: <IoLogoJavascript size={100} color="black" />,
      name: "Java Script",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full text-[40px] font-semibold py-10">
        <span>My Skills</span>
      </div>

      <div className="w-full h-[calc(100vh-200px)] flex justify-center overflow-hidden">
        <div className="flex flex-wrap w-3/5 p-4 space-x-4">
          {skills.map((skill, index) => (
            <div
              className={`w-1/5 h-fit p-4 flex flex-col items-center text-black space-y-2 rounded-lg 
               bg-white
             `}
            >
              <div>{skill.icon}</div>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
