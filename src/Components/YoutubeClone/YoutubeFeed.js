import React, { useContext, useEffect } from "react";
import { Context } from "../../context/ContextAPI";
import YoutubeCard from "./YoutubeCard";
import { motion } from "framer-motion";

const YoutubeFeed = () => {
  const { loading, Content } = useContext(Context);

  const newvarient = {
    hidden: { x: "100vh" },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const ytfeedVarient = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.1,
    },
  };

  return (
    <div className="grow h-full overflow-y-auto bg-transparent w-[calc(100%-240px)]">
      <motion.div
        variants={newvarient}
        animate="visible"
        initial="hidden"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5"
      >
        {!loading &&
          Content.map(
            (item) =>
              item.type === "video" && (
                <motion.div variants={ytfeedVarient} key={item?.video.videoId}>
                  <YoutubeCard video={item?.video} />
                </motion.div>
              )
          )}
      </motion.div>
    </div>
  );
};

export default YoutubeFeed;
