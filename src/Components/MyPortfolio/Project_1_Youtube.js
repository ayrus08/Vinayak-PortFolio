import React, { useEffect, useRef, useState } from "react";
import YtLandingPG from "../../StockFootage/Socials/YoutubeLandingPage.png"
import { useNavigate } from 'react-router-dom'
import { useInView, motion } from "framer-motion";



const Project_1_Youtube = () => {

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
    y:400,
    },
    animate: {
      y: 0,
      transition: {
        
  
        duration: 0.80,
      },
    },
  };


  let navigate = useNavigate();

  useEffect(() => {
    console.log("Element is in view: ", isInView);
    setani(isInView);
  }, [isInView]);
  return (
    <div className='w-full h-full flex flex-col justify-center items-center overflow-hidden'> 
     <div className='flex justify-center border-b-8 w-4/5'>
        <h1 className='text-yellow-600 text-6xl p-10 '>PROJECTS</h1>
      </div>
    <div ref={ref} className='flex h-[calc(100vh-200px)] justify-center items-center '>
     
   {ani && <div
   
        variants={imgvarient}
        animate="animate"
        initial="initial" className='flex space-x-10 justify-center items-center w-4/5'>

      <motion.img   variants={imgvarient}
        animate="animate"
        initial="initial" src={YtLandingPG} alt="Youtube IMG" className='w-1/2 rounded-md'/>
      <motion.div variants={textVariants}
        animate="animate"
        initial="initial" className='space-y-4'>
     <h1 className='text-[30px]'>Youtube Clone Using OpenSource API</h1>
     <p className='text-gray-500'>I undertook the challenge of recreating the YouTube website as a personal project to enhance my skills in web development. Leveraging an available open-source API(Rapid API), I meticulously crafted a clone of the YouTube, focusing on the front-end aspects of web development.</p>
     <button 
     className='px-10 py-1 bg-yellow-600 rounded-md text-black hover:bg-yellow-700'
     onClick={()=>{
      navigate("/youtube")
     }}>
      See Demo</button>
      </motion.div>
      </div>}
        
    </div>
    </div>
  )
}

export default Project_1_Youtube