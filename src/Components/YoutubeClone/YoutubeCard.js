import React from "react";
import moment from "moment";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const YoutubeCard = ({ video }) => {
  //   const videoLengthInSeconds = moment()
  //     .startOf("day")
  //     .seconds(video.lengthSeconds)
  //     .format("H:mm:ss");
  // ?.seconds(video.lengthSeconds)
  // ?.format("H:mm:ss");
  return (
    <Link to={`/youtube/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8 mr-6">
        <div className="relative h-full rounded-lg overflow-hidden">
          <img src={video?.thumbnails[0]?.url} alt="" />
          {!video.isLiveNow && (
            <span className="absolute bottom-2 right-2 bg-black/[0.7] py-1 px-2 font-semibold text-white/[0.5] text-xs rounded-md">
              {video.lengthSeconds} sec
            </span>
          )}
        </div>
        <div className="flex mt-3 text-white">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img src={video?.author?.avatar[0]?.url} alt="avatar" />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className=" text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <div className=" text-sm text-white/[0.7] font-semibold flex mt-1 items-center">
              <div>{video?.author?.title}</div>
              <div>
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                )}
              </div>
            </div>

            {!video.isLiveNow ? (
              <div className="text-white/[0.7] text-sm items-center">
                <span className="">{video.stats.views} views</span>
                <span className="text-[24px] leading-none font-bold text-white/[0.7] relative top-[-3px] mx-1">
                  .
                </span>
                <span>{video.publishedTimeText}</span>
              </div>
            ) : (
              <div className="text-white/[0.7] text-sm flex justify-start items-center">
                <span className="">{video.stats.viewers} watching</span>
                <span className="text-[24px] leading-none font-bold text-white/[0.7] relative top-[-6px]  mx-1">
                  .
                </span>
                <div className="bg-red-700 flex text-white font-bold items-center rounded-sm space-x-1 px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    focusable="false"
                  >
                    <path
                      d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p>LIVE</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default YoutubeCard;
