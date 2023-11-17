import React, { useState } from "react";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const LeftNavBar = () => {
  const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
      name: "Fashion & beauty",
      icon: <GiEclipse />,
      type: "category",
      divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
  ];

  //   const { selectedCategory, setSelectedCategory, mobileMenu } =
  // useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState();
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div className="w-[240px] overflow-y-auto py-4 max-h-[calc(100vh-56px)] bg-transparent absolute md:relative text-white">
      <div className=" flex-col hidden md:flex  px-5">
        {categories.map((item) => (
          <React.Fragment key={item.name}>
            <div
              className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${
                selectedCategory === item.name ? "bg-white/[0.15]" : ""
              }`}
              onClick={() => {
                clickHandler(item.name, item.type);
                console.log(item.type);
                console.log(selectedCategory);
                navigate("/youtube");
              }}
            >
              <span className="text-xl mr-5" key={item.name + item.name}>
                {item.icon}
              </span>
              {item.type === "home" ? "Home" : item.name}
            </div>
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeftNavBar;
