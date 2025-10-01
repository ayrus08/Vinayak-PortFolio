import React, { useEffect, useRef, useState } from "react";
import ChatAppHomePage from "../../StockFootage/Socials/Chat-App-HomePage.png";
import { useInView, motion } from "framer-motion";

const Project_2_ChatApp = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const [ani, setani] = useState(false);
  const imgvarient = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const textVariants = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    setani(isInView);
  }, [isInView]);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="flex justify-center border-b-8 w-4/5">
        <h1 className="text-yellow-600 text-6xl p-10 ">PROJECTS</h1>
      </div>
      <div
        ref={ref}
        className="flex h-[calc(100vh-200px)] justify-center items-center "
      >
        {ani && (
          <div
            variants={imgvarient}
            animate="animate"
            initial="initial"
            className="flex space-x-10 justify-center items-center w-4/5"
          >
            <motion.img
              variants={imgvarient}
              animate="animate"
              initial="initial"
              src={ChatAppHomePage}
              alt="Youtube IMG"
              className="w-1/2 rounded-md"
            />
            <motion.div
              variants={textVariants}
              animate="animate"
              initial="initial"
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl pb-1">2)</h1>
                <h1 className="text-2xl">Chat App (MERN Stack & Socket.io)</h1>
              </div>
              {/* <p className="text-gray-500">
                A full-stack chat platform built with the MERN stack (MongoDB,
                Express, React, Node.js) and Socket.IO for real-time messaging.
                <br />
                It supports secure authentication (JWT), user presence
                indicators, and a responsive UI with TailwindCSS + DaisyUI.
                <br />
                Users can chat instantly in real time with messages stored in
                MongoDB for persistence.
                <br />
                The app is designed with scalable architecture, efficient state
                management using Zustand, and provides a smooth user experience
                across devices.
              </p> */}
              <ul className="text-gray-500 list-disc list-inside space-y-2">
                <li>
                  Full-stack chat platform built with the <b>MERN stack</b>{" "}
                  (MongoDB, Express, React, Node.js) and <b>Socket.IO</b> for
                  real-time messaging
                </li>
                <li>
                  Supports <b>secure authentication (JWT)</b>, user presence
                  indicators, and a responsive UI with{" "}
                  <b>TailwindCSS + DaisyUI</b>
                </li>
                <li>
                  Enables users to chat instantly with messages stored in{" "}
                  <b>MongoDB</b> for persistence
                </li>
                <li>
                  Designed with <b>scalable architecture</b> and efficient{" "}
                  <b>state management using Zustand</b> for a smooth user
                  experience across devices
                </li>
              </ul>
              <button
                className="px-10 py-1 bg-yellow-600 rounded-md text-black hover:bg-yellow-700"
                onClick={() => {
                  window.open(
                    "https://fullstack-realtime-chat-app-dc9t.onrender.com/",
                    "_blank"
                  );
                }}
              >
                See Demo
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project_2_ChatApp;
