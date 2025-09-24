// import { useState } from "react";
// import VideoPlayer from "../../shared/Video";
import styles from "./ReelContainer.module.css";
import type { VideoTypeTemp } from "../../../types/global";
import { logger } from "../../../utils/logger";
import useReels from "./useReels";
const ReelContainer = ({ reels }: { reels: VideoTypeTemp[] }) => {
  // const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  // const handlePlayRequest = (videoId: string) => {
  //   setPlayingVideoId(videoId);
  // };
  logger.log(reels)
  // const images = [
  //   STATIC_IMAGES.REVIEW1,
  //   STATIC_IMAGES.REVIEW2,
  //   STATIC_IMAGES.REVIEW3,
  // ];
  const { loading, images } = useReels();
  return (
    <div className={`container ${styles.reelContainer}`}>
      {/* {reels.map((reel, idx) => (
        <VideoPlayer
          radius
          video={reel.video}
          fallback={reel.fallback}
          isOverlay={false}
          type={reel.type}
          videoId={`video-reel${idx}`}
          isPlaying={`video-reel${idx}` === playingVideoId}
          onPlay={() => handlePlayRequest(`video-reel${idx}`)}
          setIsPlaying={setPlayingVideoId}
        />
      ))} */}

      {loading ? Array.from({ length: 3 }).map((_, index) => <Shimmer key={index} />) : images.map((image, idx) => (
        <img key={idx} src={image} className={styles.image} alt="" />
      ))}
    </div>
  );
};
export default ReelContainer;

const Shimmer = () => {
  return (
    <div
      className="h-[600px]  w-[370px] p-6 rounded-md  bg-white flex flex-col gap-5 animate-pulse">
      <div className="h-[600px]  w-[370px] rounded bg-gray-200" />
    </div>
  );
}
